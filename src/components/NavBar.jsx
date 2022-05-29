import logo from '../logo.svg';
import CardWidget from './CardWidget';

function NavBar() {
    return <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="logo" width="50" height="34" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse justify-content-end">
  <ul class="nav">
  <li class="nav-item">
    <a class="nav-link text-white fw-bold" href="#">Link1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white fw-bold" href="#">Link2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white fw-bold" href="#">Link3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href='#'><CardWidget item={0}/></a>
  </li>
</ul>
</div>
</div>
</nav>
</>

}

export default NavBar