function validateUsr(username: string): boolean {
  return /^[a-z0-9_]{4,16}$/.test(username);
}

export default validateUsr;
