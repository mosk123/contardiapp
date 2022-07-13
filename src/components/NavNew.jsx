import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import CardWidget from './CardWidget';

export const NavNew = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light newNav">
      <div className="container-fluid">
        <Link onClick={collapseNav} className="navbar-brand" to={`/`}>
          <img src={logo} alt="logo" width="50" height="34" />
        </Link>
        <button ref={navButton} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={linksContainerRef} className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item fw-bold" style={{ textDecoration: "none", color: "white" }}>
              <Link onClick={collapseNav} className="nav-link active text-white" aria-current="page" to={``}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle fw-bold text-dark" style={{textDecoration:"none", color:"dark"}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categorias</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to={`./category/Remera`} className="dropdown-item fw-bold">Remeras</Link></li>
            <li><Link to={`./category/Campera`}className="dropdown-item fw-bold">Camperas</Link></li>
            <li><Link to={`./category/Jean`} className="dropdown-item fw-bold">Jeans</Link></li>
            <li><Link to={`./category/Buzo`} className="dropdown-item fw-bold">Buzos</Link></li>
          </ul>
        </li>
        <li className="nav-link"><Link to={`/cart`} style={{textDecoration:"none", color:"dark"}}><CardWidget/></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
