import React from 'react'

function Icons() {
  return (
    <>
      <div className='icons-grid container3'>
        <div className='icon'>
          <img src='./icon-1.png' alt='' />
          <p className='big-phone'>100% legal en europ</p>
          <p className='small-phone'> LÉgale en europE</p>
        </div>
        <div className='icon'>
          <img src='./new-icon.png' alt='' />
          <p className='big-phone'>Eleve au maroc</p>
          <p className='small-phone'>MARQUE MAROCAINE</p>
        </div>
        <div className='icon'>
          <img src='./icon-3.png' alt='' />
          <p className='big-phone'>Label Bio</p>
          <p className='small-phone'>CULTURE BioLOGIQUE</p>
        </div>
        <div className='icon'>
          <div className='radious'>
            <img src='./icon-4.png' alt='' />
          </div>
          <p>Livraison Gratuite</p>
        </div>
      </div>
    </>
  );
}

export default Icons