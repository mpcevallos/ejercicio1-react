const obtenerLikes = async () => {
  try {
    const response = await fetch("URL_DE_TU_API");
    const data = await response.json();
    const nuevosLikes = data.likes; // Suponiendo que los likes están en la propiedad 'likes' de la respuesta

    setLikes(nuevosLikes); // Actualizas el estado de likes con los nuevos likes obtenidos de la API
  } catch (error) {
    console.error("Error al obtener los likes:", error);
  }
};
