import React from 'react'
function Card({data}) {
  return (
    <>
      <div className='card container'>
        <img src={data.img} alt='' />
        <div className='small-phone-card'>
          <h2>
            {data.title} <span>{data.span}</span>
          </h2>
          <h3>{data.name}</h3>
          <p>{data.para}</p>

          <div className='btn1'>
            <button className='card-big-phone-button'>decouvrir Maintenant</button>
            <button className='card-small-phone-button'>ESSAYEZ MAINTENANT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card