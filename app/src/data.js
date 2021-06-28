import Metro2035 from './asset/Products/Littérature/Metro2035.jpg';
import ZSJusticeLeague from './asset/Products/Blu-ray/ZSJusticeLeague.jpg';
import TLOU2 from './asset/Products/Jeux vidéo/TLOU2.jpg';
import AppleWatch from './asset/Products/High-tech/AppleWatch.jpg';
import Chromecast from './asset/Products/High-tech/Chromecast.jpg';
import ThomasPesquet from './asset/Products/Littérature/ThomasPesquet.jpg';
import MadMax from './asset/Products/Blu-ray/MadMax.jpg';
import XboxSeriesS from './asset/Products/Jeux vidéo/XboxSeriesS.jpg';

const data = {
    products: [
        {
            _id: 1,
            name: 'Metro 2035',
            category: 'Littérature',
            image: Metro2035,
            price: 9.99,
            form: 'Dmitry Glukhovsky',
            rating: 4.5,
            numReviews: 10,
            description: 'Le dernier chapitre de la saga Metro',
        },
        {
            _id: 2,
            name: "Zack Snyder's Justice League",
            category: 'Blu-ray',
            image: ZSJusticeLeague,
            price: 29.99,
            from: 'Zack Snyder',
            rating: 4,
            numReviews: 15,
            description: 'Version de 4h fidèle à la vision du réalisateur et réclamée par les fans',
        },
        {
            _id: 3,
            name: 'The Last of Us Part II',
            category: 'Jeux vidéo',
            image: TLOU2,
            price: 39.99,
            from: 'Naughty Dog',
            rating: 4.5,
            numReviews: 20,
            description: "Le GOTY de l'année 2020",
        },
        {
            _id: 4,
            name: 'Apple Watch Series 6',
            category: 'High-tech',
            image: AppleWatch,
            price: 399.99,
            from: 'Apple',
            rating: 5,
            numReviews: 100,
            description: 'La meilleure montre connectée du marché',
        },
        {
            _id: 5,
            name: 'Google Chromecast',
            category: 'High-tech',
            image: Chromecast,
            price: 39,
            from: 'Google',
            rating: 4.5,
            numReviews: 50,
            description: "Vos divertissements sur grand écran",
        },
        {
            _id: 6,
            name: 'Dans la Combi de Thomas Pesquet',
            category: 'Littérature',
            image: ThomasPesquet,
            price: 19.99,
            from: 'Marion Montaigne',
            rating: 3.5,
            numReviews: 2,
            description: "Le 2 juin 2017, le Français Thomas Pesquet, 38 ans, astronaute, rentrait sur Terre après avoir passé 6 mois dans l'ISS",
        },
        {
            _id: 7,
            name: 'Mad Max Anthology',
            category: 'Blu-ray',
            image: MadMax,
            price: 29.99,
            from: 'George Miller',
            rating: 5,
            numReviews: 25,
            description: 'Quatre film culte dans un seul coffret',
        },
        {
            _id: 8,
            name: 'Xbox Series S',
            category: 'Jeux vidéo',
            image: XboxSeriesS,
            price: 299.99,
            from: 'Microsoft',
            rating: 4,
            numReviews: 20,
            description: 'La console Next-gen la plus compacte et abordable du marché',
        }
    ]
};

export default data