import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-s containerFooter d-flex justify-content-between align-items-center'>
     <div className='iconFooter'>
     <li className='listaNav'><Link to={`/`}><img src={logo} alt="logo" width="50" height="44" /></Link></li>
     </div>
       <div className='container-fluid parrafoUno'>
       <p className='lh-1 text-white fw-semibold letFooter'>Presentacion para desafio final</p>
       </div>
       <div className='container-fluid parrafoDos'>
       <p className='lh-1 text-white fw-semibold'> Tenes problemas con la compra<i class="bi bi-whatsapp iW"><Link to={`/external-link`}/></i></p>
      </div>
        </div>
    </>
  )
}

export default Footer