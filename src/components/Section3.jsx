import React from 'react'

function Section3() {
  return (
    <>
      <div className='video-grid container2'>
        <div className='video'>
          <h1 className=''>Morocana: Le FILM</h1>
          <img src='./video-group-pic.png' alt='' />
        </div>
        <div className='video-text'>
          <h1>Morocana: Le film</h1>
          <div className='video-para'>
            <p>
              Morocana incarne la quintessence du cannabis marocain, révélant
              les trésors de la Beldia, une souche réputée pour son authenticité
              et sa pureté originelle, fidèlement cultivée dans les terres
              fertiles du Rif. Première marque de ce calibre en Europe, nous
              perpétuons un savoir-faire ancestral, offrant un cannabis
              entièrement légal qui respecte à la fois nos terres et nos
              tradition.
            </p>
            <p className='padd-top'>
              {' '}
              Nos agriculteurs marocains, dépositaires de techniques séculaires,
              s'engagent à vous livrer une expérience incomparable, aussi
              respectueuse de l'environnement que de notre héritage. Nous vous
              faisons la promesse d'une excellence sans compromis, honorant le
              savoir-faire inestimable du Maroc.
            </p>
          </div>
          <div className='btn1'>
            <button>decouvrir nos produits</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3