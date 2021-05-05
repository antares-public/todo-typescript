import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper black px1">
      <a href="/" className="brand-logo">
        Todo List
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/todo-typescript">ToDo</NavLink>
        </li>
        <li>
          <NavLink to="/about">Info</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
