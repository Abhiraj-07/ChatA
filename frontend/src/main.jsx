import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { MessageContextProvider } from "./context/MessageContext.jsx";
import { LoadingContextProvider } from "./context/LoadingContext.jsx";
import { SocketConextProvider } from "./context/SocketConext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingContextProvider>
        <AuthContextProvider>
          <MessageContextProvider>
            <SocketConextProvider>
              <App />
            </SocketConextProvider>
          </MessageContextProvider>
        </AuthContextProvider>
      </LoadingContextProvider>
    </BrowserRouter>
  </StrictMode>
);
