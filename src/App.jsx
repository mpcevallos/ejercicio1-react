import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar.jsx";
import PostList from "./components/postList";
import Profile from "./components/profile.jsx";
import SearchBar from "./components/searchBar.jsx"

function App() {
  console.log("rendering App");
  const [showPosts, setShowPosts] = useState(true);
  const [search, setSearch] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const profile = {
    avatar: "/src/assets/profile.png",
    username: "john",
    bio: "whatever",
  }

  const [posts, setPosts] = useState([]);
  const [postFiltrados, setPostFiltrados] = useState([]);

  const onLogoClick = () => {
    setShowPosts(true);
  }

  const onProfileClick = () => {
    setShowPosts(false);
  }

  const getPosts = async () => {
    const apiURL = "https://three-points.herokuapp.com/api/users/";
    try {
      const response = await fetch(apiURL, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.token);
        localStorage.setItem('token', data.token);
        const tempPosts = [];
        data.map((item) => {
          const nuevoPost = { image: item.image, createAt: item.createAt.slice(0, 10), likes: item.likes, autor: item.autor.name, texto: item.text, comments: item.comments};
          tempPosts.push(nuevoPost);
        });
        setPosts(tempPosts);
        setPostFiltrados(tempPosts);
      } else {
        console.error("Error al obtener los datos:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log("Si hay token");
      setIsLogin(true);
      getPosts();
    } else {
      console.log("no hay token");
      setIsLogin(false);
    }
  }, []);

  return (
    isLogin ? <>
      <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick}></NavBar>
      <SearchBar post={posts} setPostFiltrados={setPostFiltrados}></SearchBar>
      {showPosts ? <PostList post={postFiltrados}></PostList> : <Profile avatar={profile.avatar} username={profile.username} bio={profile.bio}></Profile>}
    </> : <login onLoginComplete={onLoginComplete}></login>
  )
}

export default App;
