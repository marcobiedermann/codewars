#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import { parseArgs } from 'node:util';

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
  return `import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import foo from './index.ts';

describe('foo', () => {
  it('should', () => {
    assert.strictEqual(foo(), );
  });
});`;
}

async function getKata(id) {
  const baseUrl = 'https://www.codewars.com/api/v1/code-challenges';

  const response = await fetch(`${baseUrl}/${id}`);
  const result = await response.json();

  return result;
}

async function createFile(path, filename, content) {
  await mkdir(path, { recursive: true });
  await writeFile(`${path}/${filename}`, content);
}

const {
  positionals: [id],
} = parseArgs({
  allowPositionals: true,
});

if (!id) {
  throw new Error('Please provide Kata ID');
}

const { description, name, tags, rank, slug, url } = await getKata(id);
const kata = rank.name || 'beta';
const path = `kata/${kata}/${slug}`;

await Promise.all([
  createFile(path, 'readme.md', readmeTemplate({ name, url, description, tags })),
  createFile(path, 'index.ts', indexTemplate()),
  createFile(path, 'index.test.ts', testTemplate()),
]);
