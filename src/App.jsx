import { useState } from "react";
import NavBar from "./components/navBar.jsx";
import PostList from "./components/postList";
import Filters from "./components/filters";

function App() {
  console.log("rendering App");
  const [search, setSearch] = useState("");

  const showProfile = (showProfile) => {
    showProfile(showProfile);
  };

  const searchPost = (text) => {
    console.log("Search post", text);
    setSearch(text);
  };

  return (
    <>
      <div className="container">
        <br />
        <h5>Descripción</h5>
        <h4>
          El objetivo del ejercicio es la construcción de una aplicación web
          React.js con diferentes components que tenga como resultado la
          siguiente interfaz de usuario (Mobile first):
        </h4>
        <br />
        <NavBar showProfile={showProfile} />
        <Filters search={search} searchPost={searchPost} />
        <PostList search={search} showProfile={showProfile} />
      </div>
    </>
  );
}

export default App;
