import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PhotoDivPrincipale from '../components/PhotoDivPrincipale';
import PhotoTitle from '../components/PhotoTitle';

const Photos = () => {
    return (
        <div className="photoContainer">
            <Header />
            <PhotoTitle />
            <PhotoDivPrincipale />
            <Footer />
        </div>
    );
};

export default Photos;