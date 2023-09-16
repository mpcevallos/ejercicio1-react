import { useUserContext } from "../contexts/user-context";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Post(props) {
  const [likes, setLikes] = useState(props.likes);

  const value = useUserContext();

  const aumentarLikes = () => {
    setLikes(likes + 1);
  };
  console.log("Click en el botón de Like");

  return (
    <div className="col-sm-5 col-md-4 col-lg-3">
      <div className="card m-2">
        <img src={props.image} className="card-img-top" alt="Imagen del post" />
        <div className="card-body">
          <h5 className="card-time">{props.createdAt}</h5>
          <button
            onClick={() => {
              setLikes(likes + 1);
              aumentarLikes();
            }}
            className="btn btn-danger"
          >
            <i className="bi bi-heart-fill"></i>
          </button>
          <p className="card-author">
            <b>@{props.autor}</b>
          </p>
          <p className="card-text">{props.text}</p>
          <p className="card-comments">
            <i className="bi bi-chat-right"></i> {props.comments}
          </p>

        </div>
      </div>
    </div>
  );
}

export default Post;
