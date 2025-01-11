import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Імпортуємо Provider
import App from "./App"; // Ваш головний компонент
import { store } from "./redux/store"; // Імпортуємо ваш store

// Обгортаємо додаток у Provider і передаємо store
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);


