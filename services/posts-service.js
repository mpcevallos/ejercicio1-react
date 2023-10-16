export async function getPost() {
  // console.log("Token:", token); // Add this line to print the token value
  try {
    let token = localStorage.getItem("token");

    token = token.replace(/^"|"$/g, "");

    if (!token) {
      throw new Error("No hay token en el localStorage");
    }

    const url = "https://three-points.herokuapp.com/api/posts";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 401) {
      // If the response status is 401 (Unauthorized), try to refresh the token
      const refreshResponse = await fetch(
        "https://authentication-server.com/refresh",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (refreshResponse.ok) {
        // If the refresh request is successful, update the token and retry the original request
        const { access_token } = await refreshResponse.json();
        localStorage.setItem("token", access_token);
        token = access_token;
        const retryResponse = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (retryResponse.ok) {
          const data = await retryResponse.json();
          return data;
        } else {
          throw new Error("Error en la solicitud GET");
        }
      } else {
        throw new Error("Error al refrescar el token");
      }
    } else {
      throw new Error("Error en la solicitud GET");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John",
      });
    }, 5000);
  });
}

export async function getPosts() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://three-points.herokuapp.com/api/posts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      const tempPosts = [];
      data.map((item) => {
        const nuevoPost = {
          id: item.id,
          image: item.image,
          createdAt: item.createdAt.slice(0, 10),
          likes: item.likes,
          autor: item.author,
          text: item.text,
          comments: item.comments.length,
        };
        tempPosts.push(nuevoPost);
      });
      return tempPosts;
    } else {
      console.error("Error al obtener los posts:", response.statusText);
      throw new Error("Error al obtener los posts");
    }
  } catch (error) {
    console.error("Error en la función getPosts:", error);
    throw error;
  }
}
