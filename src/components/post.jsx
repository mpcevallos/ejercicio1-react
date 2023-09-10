import { useUserContext } from "../contexts/user-context";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
function Post({ createdAt, autor, text, comments, image, }) {
  const [like, setLike] = useState(0);
  
  const value = useUserContext();

  console.log("Click en el botón de Like");
  
  return (
    <div className="col-sm-5 col-md-4 col-lg-3">
      <div className="card m-2">
        <img src={image} className="card-img-top" alt="Imagen del post" />
        <div className="card-body">
          <h5 className="card-time">{createdAt}</h5>
           <button onClick={() => {
        setLike(like + 1);
      }}
    className="btn btn-danger"
    > <i className="bi bi-heart-fill me-2"></i>
      {like}
    </button>
          <p className="card-author"><b>{autor}</b></p>
          <p className="card-text">{text}</p>
          <p className="card-comments"><i className="bi bi-chat-right"></i> {comments}</p>
        </div>
        <p>{value.foo}</p>
      </div>
    </div>
  );
}

export default Post;