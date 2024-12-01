import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Router/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

import "./Utils/i18n";
import "./API/axios";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
