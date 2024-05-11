import React from "react";
import "./main.scss"
import { Link } from "react-router-dom"

function Main() {
  return (
    <center>
      <h1>
        This is Main Component
      </h1>
      <Link to="/">
        <button>Đăng xuất</button>
      </Link >
    </center>
  )
}

export default Main;