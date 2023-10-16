import { useState, useEffect } from "react";
import Login from "./components/login";
import PostList from "./components/postList";
import Filters from "./components/filters";
import Profile from "./components/profile";
import NavBar from "./components/navBar";
import { getPosts } from "/services/posts-service.js";

function App() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(null);
  const [search, setSearch] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [profile, setProfile] = useState(false);

  const handlePostListClick = () => {
    setShowProfile(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('authorization'));
    if (posts) {
      setToken(posts);
    }
  }, [token]);

  const onLoginComplete = (error, llave) => {
    if (error) {
      localStorage.clear();
      setToken(null);
    }
    setToken(llave);
  };

  const handleSearch = (query) => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handleLogin = () => {
    // Lógica de autenticación aquí (usando el token JWT)
    setToken(true);

    // Después de la autenticación, obtén los posts
    getPosts(token)
      .then(data => {
        setPosts(data);
        setFilteredPosts(data); // Inicialmente, muestra todos los posts
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      {!token ? (
        <Login onLoginComplete={handleLogin}/>
      ) : (
        <>
          <NavBar profile={profile} showProfile={showProfile} handlePostListClick={handlePostListClick} handleProfileClick={handleProfileClick}/>
          {posts && (
            <>
              <Filters search={search} setSearch={setSearch} onSearch={handleSearch} setShowProfile={setShowProfile} />
              {showProfile ? <Profile/> : <PostList token={token} posts={filteredPosts} setPosts={setPosts} search={search} />}
            </>
          )}
          {profile && <Profile onLoginComplete={onLoginComplete}/>}
        </>
      )}
    </div>
  );
}

export default App;
