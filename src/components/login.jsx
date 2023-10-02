import threepoints from "/src/assets/threepoints.png";
import { useState } from "react";

function Login(props) {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const apiUrl = "https://three-points.herokuapp.com/api/login";

  const postData = {
    username: "john",
    password: "P4ssW0rd!#",
  };

  const loginHandler = async () => {

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();

        setError(false);
        console.log(data.token);
        props.onLoginComplete(data.token);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("Error al realizar la petición.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <img
          className="mb-2"
          src={threepoints}
          alt="Logo de ThreePoints"
          style={{ width: "200px" }}
        />
        <h3>Login</h3>
        {error && (
          <div className="alert alert-danger">Error al iniciar sesión</div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
          }}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={loginHandler}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
