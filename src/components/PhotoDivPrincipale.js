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

const arrayImg = [cairn, abbaye, arche, cap, coccinelle, lulu, perros, phare, plage, plage_2];

const PhotoDivPrincipale = () => {


    const div = arrayImg.map((arr, index) =>  


            <div className='divPhoto'>
                <img className='photos' src={arr}alt="Cairn" />
            </div>

    );

    return div;

}

export default PhotoDivPrincipale;