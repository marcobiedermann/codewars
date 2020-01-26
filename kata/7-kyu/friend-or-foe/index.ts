function friend(friends: string[]): string[] {
  return friends.filter(friend => friend.length === 4);
}

export default friend;
