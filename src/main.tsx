import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CssVarsProvider } from "@mui/joy";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssVarsProvider defaultMode="dark">
      <App />
    </CssVarsProvider>
  </StrictMode>,
);
