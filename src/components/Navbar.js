import "./Navbar.css"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <NavLink exact to="/">Tax Calculator</NavLink>
        <NavLink to="/billManager">Bill MAnager</NavLink>
    </nav>
  )
}
