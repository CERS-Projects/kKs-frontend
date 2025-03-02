import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useMemo } from "react";
import { AppRoot, ErrorBoundary, Top } from "@/app/routes/app/index";
import { NotFound } from "./routes/not-found";
import { Welcome } from "./routes/welcome";
import { paths } from "@/config/paths";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.welcome.path,
      element: <Welcome />,
    },
    {
      path: paths.app.root.path,
      element: <AppRoot />,
      ErrorBoundary: ErrorBoundary,
      children: [
        {
          path: paths.app.top.path,
          element: <Top />,
        },
        {},
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
