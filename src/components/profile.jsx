import avatar from "/src/assets/profile.png";

function Profile({ username, bio, showProfile, onClose }) {
  const handleLogout = () => {
    onClose();
  };

  return (
    <div className="container-fluid flex-wrap text-center p-5">
      <img src={avatar} className="profile mx-auto" alt="Avatar" />
      <div className="card-body">
        <h5 className="card-title mt-4">@alex{username}</h5>
        <p className="card-text mt-4">
          Quisque quis sem euismod, <br />
          vulputate augue id, feugiat metus. <br />
          Nam faucibus pulvinar bibendum. {bio}
        </p>
        <button className="btn btn-primary text-center" onClick={handleLogout}>
          Salir
        </button>
      </div>
    </div>
  );
}

export default Profile;
