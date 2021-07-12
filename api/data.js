import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Johan',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Coline',
            email: 'user@example.com',
            password: bcrypt.hashSync('4321', 8),
            isAdmin: false,
        },
    ],

    products: [
        {
            _id: 1,
            name: 'Metro 2035',
            category: 'Littérature',
            image: "https://i.ibb.co/tmCFCzH/Metro2035.jpg",
            price: 9.99,
            countInStock: 5,
            from: 'Dmitry Glukhovsky',
            rating: 4.5,
            numReviews: 10,
            description: 'Le dernier chapitre de la saga Metro',
        },
        {
            _id: 2,
            name: "Zack Snyder's Justice League",
            category: 'Blu-ray',
            image: "https://i.ibb.co/6twRnCZ/ZSJustice-League.jpg",
            price: 29.99,
            countInStock: 0,
            from: 'Zack Snyder',
            rating: 4,
            numReviews: 15,
            description: 'Version de 4h fidèle à la vision du réalisateur et réclamée par les fans',
        },
        {
            _id: 3,
            name: 'The Last of Us Part II',
            category: 'Jeux vidéo',
            image: "https://i.ibb.co/QpF3Gbj/TLOU2.jpg",
            price: 39.99,
            countInStock: 32,
            from: 'Naughty Dog',
            rating: 4.5,
            numReviews: 20,
            description: "Le GOTY de l'année 2020",
        },
        {
            _id: 4,
            name: 'Apple Watch Series 6',
            category: 'High-tech',
            image: "https://i.ibb.co/kB6pLM7/Apple-Watch.jpg",
            price: 399.99,
            countInStock: 7,
            from: 'Apple',
            rating: 5,
            numReviews: 100,
            description: 'La meilleure montre connectée du marché',
        },
        {
            _id: 5,
            name: 'Google Chromecast',
            category: 'High-tech',
            image: "https://i.ibb.co/v3b2QbP/Chromecast.jpg",
            price: 39,
            countInStock: 18,
            from: 'Google',
            rating: 4.5,
            numReviews: 50,
            description: "Vos divertissements sur grand écran",
        },
        {
            _id: 6,
            name: 'Dans la Combi de Thomas Pesquet',
            category: 'Littérature',
            image: "https://i.ibb.co/m66jQY7/Thomas-Pesquet.jpg",
            price: 19.99,
            countInStock: 2,
            from: 'Marion Montaigne',
            rating: 3.5,
            numReviews: 2,
            description: "Le 2 juin 2017, le Français Thomas Pesquet, 38 ans, astronaute, rentrait sur Terre après avoir passé 6 mois dans l'ISS",
        },
        {
            _id: 7,
            name: 'Mad Max Anthologie',
            category: 'Blu-ray',
            image: "https://i.ibb.co/FV75FFN/MadMax.jpg",
            price: 29.99,
            countInStock: 8,
            from: 'George Miller',
            rating: 5,
            numReviews: 25,
            description: 'Quatre films cultes dans un seul coffret',
        },
        {
            _id: 8,
            name: 'Xbox Series S',
            category: 'Jeux vidéo',
            image:"https://i.ibb.co/9tZYKVG/Xbox-Series-S.jpg",
            price: 299.99,
            countInStock: 0,
            from: 'Microsoft',
            rating: 4,
            numReviews: 20,
            description: 'La console Next-gen la plus compacte et abordable du marché',
        },
    ],
};

export default data