function domainName(url: string): string {
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
}

export default domainName;
