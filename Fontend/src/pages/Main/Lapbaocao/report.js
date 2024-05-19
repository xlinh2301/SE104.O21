import React from "react";
import "./home.scss"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <center className="body">
      <h1>
        This is Home Component
      </h1>
      <Link to="/login">
        <button>Login</button>
      </Link >
      <Link to="/register">
        <button>Signup</button>
      </Link >
    </center >
  )
}

// export default Home;