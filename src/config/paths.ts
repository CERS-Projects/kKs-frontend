export const paths = {
  welcome: {
    path: "/",
    getHref: () => "/",
  },

  login: {
    path: "/login",
    getHref: () => "/login",
  },

  signup: {
    path: "/signup",
    getHref: () => "/signup",
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
    thread: {
      path: "thread/:threadId",
      getHref: (id: number) => `/app/thread/${id}`,
    },
    mypage: {
      path: "mypage",
      getHref: () => "/app/mypage",
    },
  },
} as const;
