interface Config {
  headers: {
    Authorization: string;
  };
}

export const config = (token: string): Config => {
  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return configuration;
};
