import React from 'react'

function Navbar() {
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
  return (
    <>
      <nav className='container2'>
        <div className='navbar '>
          <unpml className='sidebar'>
            <li onClick={hideSidebar}>
              <a href='#'>
                <img src='./close.png' alt='' />
              </a>
            </li>
            <a href=''>
              <li>HOME</li>
            </a>
            <a href=''>
              <li>NOS PRODUITS</li>
            </a>
            <a href=''>
              <li>LE FILM</li>
            </a>
            <a href=''>
              <li>FAQ</li>
            </a>
            <a href=''>
              <li>BLOG</li>
            </a>
            <a href=''>
              <li>DEVENIR AMBASSADEUR</li>
            </a>
            <div className='button'>
              <button>Morocana Xtreme</button>
            </div>
          </unpml>
        </div>
        <div className='sec-nav1 '>
          <div className='tokri'>
            <img src='./tokri.png' alt='' />
          </div>
          <div className='person'>
            <img src='./person.png' alt='' />
          </div>
          <div className='button'>
            <button>Morocana Xtreme</button>
          </div>
        </div>
      </nav>
      <nav className='container2'>
        <div className='navbar '>
          <ul className='hideOnPhone'>
            <a href=''>
              <li>HOME</li>
            </a>
            <a href=''>
              <li>NOS PRODUITS</li>
            </a>
            <a href=''>
              <li>LE FILM</li>
            </a>
            <a href=''>
              <li>FAQ</li>
            </a>
            <a href=''>
              <li>BLOG</li>
            </a>
            <a href=''>
              <li>DEVENIR AMBASSADEUR</li>
            </a>
          </ul>
        </div>
        <div className='sec-nav '>
          <div className='tokri'>
            <img src='./tokri.png' alt='' />
          </div>
          <div className='person'>
            <img src='./person.png' alt='' />
          </div>
          <div className='button hideOnPhone'>
            <button>Morocana Xtreme</button>
          </div>
        </div>
        <li className='men-button' onClick={showSidebar}>
          <a href='#'>
            <img src='./manu.png' alt='' />
          </a>
        </li>
      </nav>
    </>
  );
}

export default Navbar