function createSecretHolder(secret: number) {
  let _secret = secret;

  return {
    getSecret: () => _secret,
    setSecret: (newSecret: number) => {
      _secret = newSecret;
    },
  };
}

export default createSecretHolder;
