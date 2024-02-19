import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import "./styles/color.css";
import "./styles/font.css";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { store } from "./app/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
