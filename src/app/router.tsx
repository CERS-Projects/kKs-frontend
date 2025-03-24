import { useMemo } from "react";
import AppRoot, { ErrorBoundary } from "@/app/routes/app/root";
import { paths } from "@/config/paths";

import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.welcome.path,
      hydrateFallbackElement: <Spinner />,
      lazy: () => import("./routes/welcome").then(convert(queryClient)),
    },

    {
      path: paths.login.path,
      hydrateFallbackElement: <Spinner />,
      lazy: () => import("./routes/login").then(convert(queryClient)),
    },

    {
      path: paths.signup.path,
      hydrateFallbackElement: <Spinner />,
      lazy: () => import("./routes/signup").then(convert(queryClient)),
    },
    {
      path: paths.app.root.path,
      element: <AppRoot />,
      hydrateFallbackElement: <Spinner />,
      ErrorBoundary: ErrorBoundary,
      children: [
        {
          path: paths.app.top.path,
          lazy: () => import("./routes/app/top").then(convert(queryClient)),
        },
        {
          path: paths.app.thread.path,
          lazy: () => import("./routes/app/thread").then(convert(queryClient)),
        },
      ],
    },
    {
      path: "*",
      lazy: () => import("./routes/not-found").then(convert(queryClient)),
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
