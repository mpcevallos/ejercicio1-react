import { useEffect, useState } from "react";
import { getPost } from "../../services/posts-service";
import Post from "./post";
import Profile from "./profile";
import Login from "./login";

  function PostList({ post, search, profile, showProfile }) {
  const [posts, setPosts] = useState("");
  const [error, setError] = useState("");
  const [showPosts, setShowPosts] = useState(true);

  useEffect(() => {
    getPost()
      .then((showPosts) => setPosts(showPosts))
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (error) {
    return <div className="alert alert-danger">error fetching data</div>;
  }

  if (!posts) {
    return (
      <div className="p-5 text-center">
        <div className="spinner-border text-primary" role="status" />
        <h4 className="text-center text-secondary">Loading...</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-body-secondary me-4 pt-4 pb-5">
      <div className="row d-flex m-2">
        {posts
        .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
        .map((post, i) => (
          <Post
            key={i}
            createdAt={post.createdAt}
            autor={post.autor}
            text={post.text}
            comments={post.comments}
            image={post.image}
          />
        ))}
      </div>
      {showProfile && <Profile />}
      
      
    </div>
  );
}

export default PostList;
