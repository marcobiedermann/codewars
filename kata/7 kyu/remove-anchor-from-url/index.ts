function removeUrlAnchor(url: string): string {
  return url.replace(/#.*/, '');
}

export default removeUrlAnchor;
