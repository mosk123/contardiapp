import logo from '../logo.svg';
import CardWidget from './CardWidget';
import {Link} from "react-router-dom";

function NavBar() {
    return <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <li className='listaNav'><Link to={`/`}><img src={logo} alt="logo" width="50" height="34" /></Link></li>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse justify-content-end">
  <ul className="nav">
  <li className="nav-link fw-bold" ><Link to={`/contacto`} style={{textDecoration:"none", color:"white"}}>Contacto</Link></li>
  <li className="nav-link text-white fw-bold">
  <Link to={`/contacto`} style={{textDecoration:"none", color:"white"}}>Productos</Link>
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