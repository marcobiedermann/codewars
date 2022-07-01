function createSecretHolder(secret: number) {
  // eslint-disable-next-line no-underscore-dangle
  let _secret = secret;

  return {
    getSecret: () => _secret,
    setSecret: (newSecret: number) => {
      _secret = newSecret;
    },
  };
}

export default createSecretHolder;
