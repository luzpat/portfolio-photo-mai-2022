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

const width = '100%';
const height = '100%';

const arrayImg = [
    {
        titre: 'Cairn',
        url: cairn,
        text: 'Photo réalisée au cap Fréhèl. Au détour d\'un chemin en direction du bord de la falaise. Un cairn peut avoir beaucoup de significations particulières. Ici, nous pouvons imaginer qu\'un passant ait souhaité marquer son passage en ce lieu emblématique.',
        width: width
    },

    {
        titre: 'Abbaye',
        url: abbaye,
        text: 'L\'Abbaye Saint-Mathieu se situe sur la commune de Plougonvelin dans le Finistère. Située sur la pointe Saint-Mathieu, une ambiance de bout du monde se dégage de ce lieu.',
        width: width
    },

    {
        titre: 'Arche',
        url: arche,
        text: 'Une arche de roche sur une plage de Plouarzel',
        width: width
    },

    {
        titre: 'Cap',
        url: cap,
        text: 'Le cap Fréhèl. Cette photo rend compte de ce lieu unique et marquant. Nous y voyons l\'extrémité du cap, donnant sur la Manche.',
        width: width

    },

    {
        titre: 'Coccinelle',
        url: coccinelle,
        text: 'Une coccinelle surprise sur une plante.',
        width: width

    },

    {
        titre: 'Lulu',
        url: lulu,
        text: 'Ce chat pose toujours pour une bonne photo.',
        width: width

    },

    {
        titre: 'Perros',
        url: perros,
        text: 'La plage de Perros-Guirec, prise depuis le balcon d\'un appartement.',
        width: width

    },

    {
        titre: 'Phare',
        url: phare,
        text: 'Le phare du petit Minou. C\'est la premiere photo à avoir subi ce traitement, celle qui m\'a donné l\'idée de créer des hors-cadres.',
        width: width

    },

    {
        titre: 'Plage Plouarzel',
        url: plage,
        text: 'Plage de Plouarzel',
        width: width

    },

    {
        titre: 'Plage Plouarzel 2',
        url: plage_2,
        text: 'Plage de Plouarzel',
        width: width

    },
];

const PhotoDivPrincipale = () => {

    const div = arrayImg.map((arr, index) =>


        <div className='containerPhoto'>
            <div className='divPhoto'>
                <figure className='figurePhoto'>
                    <img className='photos img' src={arr.url} alt={arr.titre} width={arr.width} height={arr.height} />
                    <figcaption className='photofig'>{arr.titre}</figcaption>
                </figure>
            </div>

            <div className='divText'>
                <p>{arr.text}</p>
            </div>

        </div>



    );

    return div;

}

export default PhotoDivPrincipale;