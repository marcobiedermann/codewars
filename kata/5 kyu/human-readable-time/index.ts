function pad(val: number): string {
  return `${val}`.padStart(2, '0');
}

function humanReadable(seconds = 0): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds / 60) % 60);
  const s = seconds % 60;

  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export default humanReadable;
