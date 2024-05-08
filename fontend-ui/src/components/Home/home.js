import React from "react";
import { Link } from "react-router-dom"
import './home.scss'

function Home() {
  return (
    // code Home trong nay
    <center className="body">
      <h1 className="body__header">
        This is Home Component
      </h1>
      <div className="body__main">
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