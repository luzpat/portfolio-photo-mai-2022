import React from 'react';
import Header from '../components/Header';
import PhotoDivPrincipale from '../components/PhotoDivPrincipale';
import PhotoTitle from '../components/PhotoTitle';

const Photos = () => {
    return (
        <div className="photoContainer">
            <Header />
            <PhotoTitle />
            <PhotoDivPrincipale />
        </div>
    );
};

export default Photos;