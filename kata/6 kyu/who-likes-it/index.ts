function likes(names: string[]): string {
  const templates = [
    'no one likes this',
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  ];

  const index = Math.min(names.length, templates.length - 1);

  return templates[index];
}

export default likes;
