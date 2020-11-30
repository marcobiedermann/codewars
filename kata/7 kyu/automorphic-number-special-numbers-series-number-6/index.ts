function automorphic(n: number): 'Automorphic' | 'Not!!' {
  return (n ** 2).toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!';
}

export default automorphic;
