import ReactDOM from "react-dom/client";
import UserContextProvider from "/src/contexts/user-context.jsx";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <Login/>
    </UserContextProvider>
  </BrowserRouter>
);
