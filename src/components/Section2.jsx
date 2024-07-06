import React from 'react';
import Card from './Card';

function Section2() {
  const card = [
    {
      title: ' Beldia Hash ',
      span: '(60% CBD)',
      name: 'A partir de 4.99€/Gramme',
      para: 'Un gout riche et terrien pour une relaxation proffonde.',
      img: './morocana-pic1.png',
    },
    {
      title: 'Beldia Weed ',
      span: '(21% CBD)',
      name: 'A partir de 8.99€/Gramme',
      para: 'Saveurs mielleuse et florale intense pour un moment de détente unique.',
      img: './morocana-pic2.png',
    },
  ];
  return (
    <>
      <div className='section2-grid'>
        <div className='back-layers'>
          <div className='back-text'>
            <h1>Nos Produits</h1>
            <p>
              Nos Produits Découvrez les joyaux du Rif et choisissez votre
              chemin vers la tranquillité avec nos variétés Beldia classique ou
              osez l'aventure <span> Morocana Xtreme </span> pour un voyage dans
              l’espace.
            </p>
          </div>
        </div>
        {card.map((item) => {
          return <Card key={item.name} data={item} />;
        })}
        
      </div>
    </>
  );
}

export default Section2;
