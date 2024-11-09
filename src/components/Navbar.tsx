import "../css/layouts/navbar.css";
function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="menu-toggle" id="mobile-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-links" id="navLinks">
          <li>
            <a href="#hero">INICIO</a>
          </li>
          <li>
            <a href="#about">ACERCA DE MI</a>
          </li>
          <li>
            <a href="#technologies">TECNOLOGÍAS</a>
          </li>
          <li>
            <a href="#summary">EXPERIENCIA</a>
          </li>
          <li>
            <a href="#certificates">CERTIFICACIONES</a>
          </li>
          <li>
            <a href="#contact">CONTACTO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
