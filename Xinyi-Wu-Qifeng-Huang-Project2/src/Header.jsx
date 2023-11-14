import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/game" className="nav-link">
        Game
      </NavLink>
      <NavLink to="/rules" className="nav-link">
        Rules
      </NavLink>
    </div>
  );
}
