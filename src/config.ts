type Config = {
  showMessageError: (message: string) => void;
  showModalError: (arg: { title: string; content: string }) => void;
  onTokenExpired: () => void;
  on401: () => void;
};

let config: Config = {} as Config;

const defaultConfig: Config = {
  showMessageError() {
    console.log("showMessageError");
  },
  showModalError() {
    console.log("showModalError");
  },
  onTokenExpired() {
    console.log("onTokenExpired");
  },
  on401() {
    console.log("onTokenExpired");
  },
};

export const getConfig = (): Config => {
  return config;
};

export const setConfig = (_config: Partial<Config>) => {
  config = Object.assign({}, defaultConfig, _config);
};
