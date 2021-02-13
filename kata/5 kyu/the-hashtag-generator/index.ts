function capitalize(str: string): string {
  const [first, ...rest] = str;

  return `${first.toUpperCase()}${rest.join('')}`;
}

function generateHashtag(str: string): string | false {
  const normalized = str.trim().replace(/\s+/g, ' ');

  if (!normalized) {
    return false;
  }

  const hashTag = `#${normalized.split(' ').map(capitalize).join('')}`;

  if (hashTag.length > 140) {
    return false;
  }

  return hashTag;
}

export default generateHashtag;
