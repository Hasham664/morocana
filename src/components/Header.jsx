import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <div className='dilivery'>
        <img src='./truck.png' alt='' />
        <p>Livraison gratuite à partir de 49€ d’achats</p>
      </div>
      <Navbar />
      <div className='header'>
        <div className='grid-header'>
          <div className='header-text container'>
            <div className='cent'>
              <img src='./text.png' alt='' />
              {/* <img src="./logo-2.png" alt="" /> */}
            </div>
            <div className='para'>
              <h4> Où le patrimoine rencontre l'excellence.</h4>
              <h3>La tradition rencontre l'excellence.</h3>
              <p>
                Nos racines marocaines vous fournissent le meilleur cannabis du
                globe, cultive sur sa terre ancestrale et béni pour sa qualité
                sans égal.
              </p>
            </div>
            <div className='btn1'>
              <button className='big-phone'>decouvrir nos produits</button>
              <button className='small-phone'>
                REJOIGNEZ L’ÉLITE DES CONNAISSEURS
              </button>
            </div>
          </div>
          <div className='null'></div>
        </div>
      </div>
    </>
  );
}

export default Header