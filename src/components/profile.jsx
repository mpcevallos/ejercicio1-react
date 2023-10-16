import { PropTypes } from "prop-types";
import avatar from "/src/assets/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.webp";

function Profile({ username, bio, showProfile, onClose}) {
  
function onLogOut () {
  localStorage.removeItem("token");
  window.location.reload();
}

  return (
    <div className="container-fluid flex-wrap text-center p-5">
      <img src={avatar} className="profile mx-auto" alt="Avatar" />
      <div className="card-body">
        <h5 className="card-title mt-4">@John</h5>
        <p className="card-text mt-4">
          Quisque quis sem euismod, <br />
          vulputate augue id, feugiat metus. <br />
          Nam faucibus pulvinar bibendum. {bio}
        </p>

        <button className="btn btn-primary text-center" onClick={() => onLogOut(true)} >Salir</button>
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
