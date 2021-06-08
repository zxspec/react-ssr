import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default () => (
  <nav className="header">
    <Link to="/">Home</Link>
    <Link to="/films">Films</Link>
    <Link to="/people">Characters</Link>
  </nav>
);
