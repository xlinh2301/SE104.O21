import React from "react";
import { Link } from "react-router-dom"

function Home() {
  return (
    // code Home trong nay
    <center>
      <h1>
        This is Home Component
      </h1>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Signup</button>
        </Link>
      </div>
    </center>
  )
}

export default Home;