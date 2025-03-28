import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";

import { App } from "./app";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
  <React.StrictMode>
    <Provider forcedTheme="light">
      <App />
    </Provider>
  </React.StrictMode>
);
