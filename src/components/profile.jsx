import { PropTypes } from "prop-types";
import avatar from "/src/assets/profile.png";

export async function getProfile() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://three-points.herokuapp.com/api/users/me",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error al obtener los posts:", response.statusText);
      throw new Error("Error al obtener los posts");
    }
  } catch (error) {
    console.error("Error en la función getProfile:", error);
    throw error;
  }
}

function onLogOut () {
  localStorage.removeItem("token");
  window.location.reload();
}

function Profile({ avatar, username, bio, showProfile, onClose}) {
  const handleLogout = () => {
    onClose();
    onLogOut();
  };

  return (
    <div className="container-fluid flex-wrap text-center p-5">
      <img src={avatar} className="profile mx-auto" alt="Avatar" />
      <div className="card-body">
        <h5 className="card-title mt-4">@{username}</h5>
        <p className="card-text mt-4">
          Quisque quis sem euismod, <br />
          vulputate augue id, feugiat metus. <br />
          Nam faucibus pulvinar bibendum. {bio}
        </p>
        <button className="btn btn-primary text-center" onClick={handleLogout} >
          Salir
        </button>
      </div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  showProfile: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

export default Profile;
