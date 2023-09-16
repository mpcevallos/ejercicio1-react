import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import UserContextProvider from "/src/contexts/user-context.jsx";
import Login from "./components/login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
       <NavBar/>
        <SearchBar/>
        <Login/>
    </UserContextProvider>
  </BrowserRouter>
);
