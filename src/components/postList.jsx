import Post from "./post" // Asegúrate de que la ruta del archivo sea correcta

const posts = [
  {
    img: "https://api.slingacademy.com/public/sample-photos/30.jpeg",
    time: "Hace 5 minutos",
    author: "@paul",
    likes: 10,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices ante sodales augue vestibulum gravida.",
    comments: "Comments (27)"
  },
  {
    img: "https://api.slingacademy.com/public/sample-photos/31.jpeg",
    time: "Hace 10 minutos",
    author: "@diego",
    likes: 22,
    text: "Quisque quis sem euismod, vulputate augue id, feugiat metus. Nam faucibus pulvinar bibendum.",
    comments: "Comments (15)",
  },
  {
    img: "https://api.slingacademy.com/public/sample-photos/32.jpeg",
    time: "Hace 12 minutos",
    author: "@stephanie",
    likes: 45,
    text: "Nam dictum dui ac mollis ultrices. Pellentesque eu cursus augue. Nam faucibus pulvinar bibendum.",
    comments: "Comments (10)",
  },
  {
    img: "https://api.slingacademy.com/public/sample-photos/33.jpeg",
    time: "Hace 1 hora",
    author: "@jacqueline",
    likes: 60,
    text: "Sed et posuere neque. Aliquam dictum lectus sit amet purus condimentum, ut elementum sapien mattis.",
    comments: "Comments (16)",
  },
  {
    img: "https://api.slingacademy.com/public/sample-photos/34.jpeg",
    time: "Hace 6 horas",
    author: "@jack",
    likes: 25,
    text: "Curabitur tristique tortor vel pharetra tempor. Donec ultrices massa vitae purus euismod maximus. Pellentesque laoreet libero a erat congue, id porta odio vestibulum.",
    comments: "Comments (20)",
  },
    {
    img: "https://api.slingacademy.com/public/sample-photos/35.jpeg",
    time: "Hace 1 día",
    author: "@boots",
    likes: 100,
    text: "Curabitur sodales tortor et rhoncus aliquam. Nunc finibus est sapien, vel vulputate tellus tincidunt non. Nullam fermentum tortor laoreet tincidunt semper.",
    comments: "Comments (41)",
  },
];

function PostList() {
  return (
    <div className="container-fluid bg-body-secondary me-4 pt-4 pb-5">
    <div className="row d-flex m-2">
      {posts.map((post, i) => (
        <Post
          key={i}
          img={post.img}
          time={post.time}
          author={post.author}
          likes={post.likes}
          text={post.text}
          comments={post.comments}
        />
      ))}
    </div>
    </div>
  );
}

export default PostList;
