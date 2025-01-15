function _if(bool: boolean, func1: () => void, func2: () => void): void {
  return bool ? func1() : func2();
}

export default _if;
