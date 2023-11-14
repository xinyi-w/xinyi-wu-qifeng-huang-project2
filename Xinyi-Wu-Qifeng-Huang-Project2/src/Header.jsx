import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/" className="nav-link">
        Game
      </NavLink>
      <NavLink to="/rules" className="nav-link">
        Rules
      </NavLink>
    </div>
  );
}
