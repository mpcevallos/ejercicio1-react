import { useState, useEffect } from "react";
import Login from "./components/login";
import PostList from "./components/postList";

function App() {
  const [posts, setPosts] = useState([]);

   const [token, setToken] = useState(null);

  useEffect(() => {
    console.log("verificando token: " + token);
    const posts = JSON.parse(localStorage.getItem('authorization'));
    if (posts) {
      setToken(posts);
    }
  }, [token]);

  const onLoginComplete = (error, llave) => {
    if (error) {
      localStorage.clear();
      setToken(null);
      //setError(error)
    }
    //setError(error)
    setToken(llave);
  };

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