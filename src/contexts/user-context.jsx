/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "/services/posts-service.js";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import App from "../App";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return (
      <div>
       <NavBar/>
       <SearchBar/>
       <App />
      </div>
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  return useContext(UserContext);
}

export default UserContextProvider;
