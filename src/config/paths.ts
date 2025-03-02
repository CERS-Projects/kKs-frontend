export const paths = {
  welcome: {
    path: "/",
    getHref: () => "/",
  },

  auth: {},

  app: {
    root: {
      path: "/app",
      getHref: () => "/app",
    },
    top: {
      path: "",
      getHref: () => "/app",
    },
  },
} as const;
