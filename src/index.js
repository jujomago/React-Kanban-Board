import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KanBanContextProvider from "./contexts/KanBanContextProvider";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <KanBanContextProvider>
      <App />
    </KanBanContextProvider>
  </StrictMode>
);
