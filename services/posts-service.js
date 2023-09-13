export function getPost() {
  return fetch("https://three-points.herokuapp.com/api/posts") // Cambia la URL al servidor intermedio o proxy
    .then((response) => response.json())
    .then((data) => data.episodes);
}

export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
      });
    }, 2000);
  });
}
