import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "/src/contexts/user-context.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
);
