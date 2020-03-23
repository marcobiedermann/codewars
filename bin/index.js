#!/usr/bin/env node

const { promises: fs } = require('fs');
const https = require('https');

function readmeTemplate(options) {
  const { description, name, tags, url } = options;

  return `# [${name}](${url})

${description}

---

## Tags

${tags
  .sort()
  .map((tag) => `* ${tag}`)
  .join('\n')}
`;
}

function indexTemplate() {
  return `function foo() {

}

export default foo;
`;
}

function testTemplate() {
  return `import foo from '.';

describe('foo', () => {
  it('should', () => {

  });
});
`;
}

function getKata(id) {
  const baseUrl = 'https://www.codewars.com/api/v1/code-challenges';

  return new Promise((resolve) => {
    let data = '';

    https.get(`${baseUrl}/${id}`, (response) => {
      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        const result = JSON.parse(data);

        resolve(result);
      });
    });
  });
}

async function writeFile(path, filename, content) {
  await fs.mkdir(path, { recursive: true });
  await fs.writeFile(`${path}/${filename}`, content);
}

async function main() {
  const [id] = process.argv.slice(2);

  if (!id) {
    throw new Error('Please provide Kata ID');
  }

  const { description, name, tags, rank, slug, url } = await getKata(id);
  const kata = rank.name || 'beta';
  const path = `kata/${kata}/${slug}`;

  Promise.all([
    writeFile(path, 'readme.md', readmeTemplate({ name, url, description, tags })),
    writeFile(path, 'index.ts', indexTemplate()),
    writeFile(path, 'index.test.ts', testTemplate()),
  ]);
}

main();
