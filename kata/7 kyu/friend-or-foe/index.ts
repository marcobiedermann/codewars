function friend(friends: string[]): string[] {
  return friends.filter(item => item.length === 4);
}

export default friend;
