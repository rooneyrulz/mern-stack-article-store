import React from 'react';
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">Article List</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/add-article">Add Article</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/show-article">Show Articles</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/about">About</NavLink>
                  </li>
              </ul>
          </div>
      </nav>
    </div>
  )
}
