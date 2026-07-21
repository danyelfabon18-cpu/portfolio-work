import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">☕ Brew & Co.</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;