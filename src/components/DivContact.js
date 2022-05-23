import React from 'react';
import instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.png';
import '../css/contact.scss';

const DivContact = () => {

    function rotate(e) {
        e.target.style.transform = 'rotate(360deg)'
        e.target.style.transition = 'transform 1s ease-in';
    }

    function rotateInv(e) {
        e.target.style.transform = 'rotate(0deg)'
        e.target.style.transition = 'transform 1s ease-in';
    }

    return (

        <div>
            <h1>Pour me contacter</h1>
            <div className="contactContainer">
                <div className='insta'>
                    <a onMouseEnter={rotate} onMouseLeave={rotateInv} href="https://www.instagram.com/arthurusphotographie/" target="_blank"><img
                        src={instagram}
                        alt="logo instagram"
                        className="logo" /></a>
                    <p>Cliquez sur l'icone pour visiter mon instagram</p>
                </div>
                <div className='linkedin'>
                    <a onMouseEnter={rotate} onMouseLeave={rotateInv} href="http://linkedin.com/in/patricebohelaydeveloper" target="_blank"><img src={linkedin} alt="logo linkedin" className="logo" /></a>
                    <p>Cliquez sur l'icone pour visiter mon LinkedIn</p>
                </div>
            </div>
        </div>
    );
};

export default DivContact;