import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import UserContextProvider from "/src/contexts/user-context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
);
