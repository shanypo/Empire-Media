import { NavLink } from "react-router-dom";

export function TabNav() {
  return (
    <div className="tab-nav">
      <NavLink
        className={({ isActive }) => (isActive ? " active" : "")}
        to="/overview"
      >
        Overview
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? " active" : "")}
        to="/history"
      >
        History
      </NavLink>
    </div>
  );
}
