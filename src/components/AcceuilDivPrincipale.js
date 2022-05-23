import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/acceuildivprincipale.scss';
import { Carousel } from 'react-responsive-carousel';
import abbaye from '../img/Abbaye Saint Mathieu.jpg';
import arche from '../img/Arche.jpg';
import coccinelle from '../img/Coccinelle.jpg';
import perros from '../img/Perros Guirrec.jpg';
import phare from '../img/Phare du petit Minou.jpg';
import plage from '../img/Plage de Plouarzel.jpg';
import plage_2 from '../img/Plouarzel Plage.jpg';



const AcceuilDivPrincipale = () => {

    const images = [abbaye, arche, coccinelle, perros, phare, plage, plage_2];

        const slide = images.map((arr) => {
        return (
            <div className="carouselDiv">
            <Carousel>
                <div className="imageDiv">
                    <img src={arr} alt="images" height="100%"/>
                </div>
            </Carousel>
            </div>
        )
    });

return (

    <Carousel autoPlay infiniteLoop interval={5000} >
        {slide}
    </Carousel>
)
    // const slide = images.map((arr) => {
    //     return (
    //         <CarouselItem>
    //             <img src={arr} alt="" height="600" />
    //         </CarouselItem>
    //     )
    // });

    // return (
    //     <div className="container">
    //         <h1 className="acceuilTitle">Bienvenue sur mon <br /> portfolio photographique.</h1>
    //         <div className='app'>
    //             <Carousel>
    //                 {slide}
    //             </Carousel>
    //         </div>
    //     </div>
    // );



};

export default AcceuilDivPrincipale;