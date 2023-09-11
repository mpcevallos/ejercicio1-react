import React, { useState } from 'react';

const Login = () => {
  const [error, setError] = useState(false);

  const onLoginComplete = async (username, password) => {
    const requestBody = JSON.stringify({ username, password });

    try {
      const response = await fetch('https://three-points.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: requestBody
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        // Redirigir al listado de posts
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error al enviar la petición:', error);
      setError(true);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div>Error al iniciar sesión</div>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.elements.username.value;
          const password = e.target.elements.password.value;
          onLoginComplete(username, password);
        }}
      >
        <div>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
