function maskify(cc: string): string {
  return cc.replace(/.(?=.{4})/g, '#');
}

export default maskify;
