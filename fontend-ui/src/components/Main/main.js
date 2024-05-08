import React from "react";
import { Link } from "react-router-dom";
import './main.scss'

function Main() {
  return (
    // code Main trong nay
    <div class="position-relative">
      <center>
        <h1>
          This is Main Component
        </h1>

        <Link to="/caygiapha">
          <button>Cây gia phả</button>
        </Link>
        <Link to="/tracuu">
          <button>Tra cứu</button>
        </Link>
        <Link to="/themthanhvien">
          <button>Thêm thành viên</button>
        </Link>
      </center>
      <div class="position-absolute top-0 end-0 mt-3 mx-3">
        <Link to="/">
          <button>Đăng xuất</button>
        </Link>
      </div>
    </div>
  )
}

export default Main;