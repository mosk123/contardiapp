import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-secondary conteinerFooter d-flex justify-content-between align-items-center'>
     <div className='bg-secondary iconFooter'>
     <li className='listaNav'><Link to={`/`}><img src={logo} alt="logo" width="50" height="44" /></Link></li>
     </div>
       <div>
       <p className='lh-1 text-white fw-light letFooter'>App creada unicamente como presentacion final</p>
       </div>
       <div>
       <p className='lh-1 text-white fw-light'> Tenes problemas con la compra <i class="bi bi-whatsapp iW"></i></p>
      </div>
        </div>
    </>
  )
}

export default Footer