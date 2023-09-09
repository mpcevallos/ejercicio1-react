import NavBar from "./components/navBar.jsx";
import SearchBar from "./components/searchBar.jsx";
import PostList from "./components/postList.jsx";

function App() {
  console.log("rendering App");

  return (
    <>
      <div className="container">
        <br/>
        <h5>Descripción</h5>
      <h4>El objetivo del ejercicio es la construcción de una aplicación web React.js con diferentes components que tenga como resultado la siguiente interfaz de usuario (Mobile first):</h4>
      <br/>
      <NavBar/>
      <SearchBar/>
      <PostList/>
      </div>
    </>
  )
}

export default App