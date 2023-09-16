export function getPost() {
  return fetch("https://three-points.herokuapp.com/api/posts")
    .then((response) => response.json())
    .then((data) => data.posts);
}

export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
      });
    });
  });
}
