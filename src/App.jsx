import { useState } from "react";
import Login from "./components/login";
import PostList from "./components/postList";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [posts, setPosts] = useState([]);
  
  const onLoginComplete = (token) => {
    setToken(token);
  }

  return (
  <div>
      {!token ? (
      <Login onLoginComplete={onLoginComplete}/>
      ) : (
        <PostList token={token} posts={posts} setPosts={setPosts} />
      )}
    </div>
  );
}

export default App;