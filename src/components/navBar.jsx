import { useState } from "react";
import Profile from "./profile";
import PostList from "./postList"; // Importa el componente PostList si no lo has hecho aún

function NavBar() {
  const [showProfile, setShowProfile] = useState(false);
  const [showPostList, setShowPostList] = useState("");

  console.log("rendering NavBar!");

const handleClick = () => {
    setShowPostList(!showPostList); 
  };

  const handleProfileClose = () => {
  setShowProfile(false); // Cambia el estado para indicar que el componente debe cerrarse
};

  return (
    <nav className="navbar bg-body-secondary d-flex container-fluid">
      <div className="container">
        <a className="navbar-brand">
          <i className="bi bi-lightning-charge-fill m-2" 
          onClick={handleClick}>
            three pics
          </i>
          <i
            className="bi bi-person-circle"
            onClick={() => setShowProfile(!showProfile)}
          ></i>

        </a>
        {/* {showProfile && <Profile />} */}
        {showPostList && <PostList/>}
        {showProfile && <Profile onClose={handleProfileClose} />}
      </div>
    </nav>
  );
}

export default NavBar;
