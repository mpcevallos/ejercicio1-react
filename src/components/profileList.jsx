import Profile from './Profile'; 

function ProfileList({ profiles }) { 
  return (
    <div className="container-fluid bg-body-secondary me-4 pt-4 pb-5">
      <div className="row d-flex m-2">
        {profiles.map((profile, i) => (
          <Profile
            key={i}
            avatar={profile.avatar}
            username={profile.username}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileList;
