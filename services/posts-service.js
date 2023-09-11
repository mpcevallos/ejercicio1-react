export function getPost() {
  return fetch(
    "https://globalmakermedia.blob.core.windows.net/core/misc/data.json"
  )
    .then((response) => response.json())
    .then((data) => data.episodes);
}

export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
      });
    }, 500);
  });
}
