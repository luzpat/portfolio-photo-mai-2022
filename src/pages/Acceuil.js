import React from 'react';
import AcceuilDivPrincipale from '../components/AcceuilDivPrincipale';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Acceuil = () => {
    return (
        <div>
            <Header />
            <AcceuilDivPrincipale />
            <Footer />
        </div>
    );
};

export default Acceuil;