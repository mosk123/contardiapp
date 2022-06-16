import logo from '../logo.svg';
import CardWidget from './CardWidget';
import {Link} from "react-router-dom";

function NavBar() {
    return <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <li className='listaNav'><Link to={`/`}><img src={logo} alt="logo" width="50" height="34" /></Link></li>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse justify-content-end">
  <ul className="nav">
  <li className="nav-link fw-bold" ><Link to={`/contacto`} style={{textDecoration:"none", color:"white"}}>Contacto</Link></li>
  <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-bold" style={{textDecoration:"none", color:"white"}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to={`./category/remera`} className="dropdown-item fw-bold">Remeras</Link></li>
            <li><Link to={`./category/campera`}className="dropdown-item fw-bold">Camperas</Link></li>
            <li><Link to={`./category/jean`} className="dropdown-item fw-bold">Jeans</Link></li>
            <li><Link to={`./category/buzo`} className="dropdown-item fw-bold">Buzos</Link></li>
           </ul>
        </li>

  <li className="nav-link"><Link to={`/contacto`} style={{textDecoration:"none", color:"white"}}><CardWidget item={0}/></Link>
  </li>
</ul>
</div>
</div>
</nav>
</>

}

export default NavBar