import React from 'react';
import '../css/acceuildivprincipale.scss';
import { CarouselItem } from './Carousel';
import Carousel from './Carousel';
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


const AcceuilDivPrincipale = () => {

    const images = [cairn, abbaye, arche, cap, coccinelle, lulu, perros, phare, plage, plage_2];

    const slide = images.map((arr) => {
        return (
            <CarouselItem>
                <img src={arr} alt="" height="600" />
            </CarouselItem>
        )
    });

    return (
        <div className="container">
            <h1 className="acceuilTitle">Bienvenue sur mon <br /> portfolio photographique.</h1>
            <div className='app'>
                <Carousel>
                    {slide}
                </Carousel>
            </div>
        </div>
    );

};

export default AcceuilDivPrincipale;