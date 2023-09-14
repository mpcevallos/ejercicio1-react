import ReactDOM from "react-dom/client";
import UserContextProvider from "/src/contexts/user-context.jsx";
import PostList from "./components/postList.jsx";
import Login from "./components/login.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./components/profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostList />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>
);
