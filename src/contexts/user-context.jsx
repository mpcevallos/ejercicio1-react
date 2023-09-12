import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "/Users/mariapaula/Documents/MasterThreePoints/Modulo-FrontEnd-Frameworks/clase2-reactjs/ejercicio2-react/services/posts-service.js";
import NavBar from "../components/navBar";
import PostList from "../components/postList";

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
       <PostList/>
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
