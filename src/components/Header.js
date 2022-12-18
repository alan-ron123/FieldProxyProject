import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./assets/table.css";
function Header() {
  let navigate = useNavigate();

  function reDirect1() {
    navigate("/table ");
  }

  function reDirect2() {
    navigate("/view");
  }
  function reDirect3() {
    navigate("/");
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand ms-5" href="#">
          FIELD PROXY
        </a>

        <div>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a id="dark" class="nav-link" href="#" onClick={reDirect3}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a id="dark" class="nav-link" href="#" onClick={reDirect1}>
                Table
              </a>
            </li>
            <li class="nav-item">
              <a id="dark" class="nav-link" href="#" onClick={reDirect2}>
                View Table
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
