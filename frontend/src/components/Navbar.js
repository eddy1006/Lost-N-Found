import React from "react";

export default function Navbar() {
  return (
    // <div>
    //   <nav className="navbar" style={{ backgroundColor: "#41B3A3" }}>
    //     <ul className="nav">
    //       <li className="nav-item">
    //         <a className="nav-link active" aria-current="page" href="#">
    //           Feeds
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Upload
    //         </a>
    //       </li>
    //     </ul>
    //     <ul className="navbar-nav ms-auto">
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           History
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>

    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand abs" href="#">
          Navbar 1
        </a>
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapseNavbar">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#myAlert" data-bs-toggle="collapse">
                Link
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href=""
                data-bs-target="#myModal"
                data-bs-toggle="modal">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
