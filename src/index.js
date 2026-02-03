import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./contex/AppContext"; // Fixed import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider> {/* Wrapped App with Provider */}
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
