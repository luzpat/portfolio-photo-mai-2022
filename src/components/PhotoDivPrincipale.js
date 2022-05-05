import React from 'react';
import '../css/photos.scss';
import cairn from '../img/Cairn cap Fréhel 2 (30x30).jpg';
import abbaye from '../img/Abbaye Saint Mathieu.jpg';
import arche from '../img/Arche.jpg';
import cap from '../img/Cap Fréhel.jpg';
import coccinelle from '../img/Coccinelle.jpg';
import lulu from '../img/Demi Lulu.jpg';
import perros from '../img/Perros Guirrec.jpg';
import phare from '../img/Phare du petit Minou.jpg';
import plage from '../img/Plage de Plouarzel.jpg';
import plage_2 from '../img/Plouarzel Plage.jpg';

const arrayImg = [
    {
        titre: 'Cairn',
        url: cairn,
        text: 'Photo réalisée au cap Fréhèl.'
    },

    {
        titre: 'Abbaye',
        url: abbaye,
        text: 'Abbaye Saint-Mathieu'
    },

    {
        titre: 'Arche',
        url: arche,
        text: 'Une arche de roche sur une plage de Plouarzel'
    },

    {
        titre: 'Cap',
        url: cap,
        text: 'Le cap Fréhèl'
    },

    {
        titre: 'Coccinelle',
        url: coccinelle,
        text: 'Une coccinelle'
    },

    {
        titre: 'Lulu',
        url: lulu,
        text: 'Le chat'
    },

    {
        titre: 'Perros',
        url: perros,
        text: 'La plage de Perros-Guirec'
    },

    {
        titre: 'Phare',
        url: phare,
        text: 'Le phare du petit Minou'
    },

    {
        titre: 'Plage Plouarzel',
        url: plage,
        text: 'Plage de Plouarzel'
    },

    {
        titre: 'Plage Plouarzel 2',
        url: plage_2,
        text: 'Plage de Plouarzel'
    },
];

const PhotoDivPrincipale = () => {

    const div = arrayImg.map((arr, index) =>


        <div className='containerPhoto'>
            <div className='divPhoto'>
                <figure className='figurePhoto'>
                    <img className='photos' src={arr.url} alt={arr.titre} />
                    <figcaption className='photofig'>{arr.titre}</figcaption>
                </figure>
            </div>

            <div className='divText'>
                {arr.text}
            </div>

        </div>



    );

    return div;

}

export default PhotoDivPrincipale;