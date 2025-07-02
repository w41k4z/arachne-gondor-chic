const {
  Category,
  Product,
  Produit,
  DailyProduct,
  ProductPrice,
  StockMovement,
  User,
  Client
} = require("../models/relation/Model");
const bcrypt = require('bcryptjs');

async function insertTestData() {
  try {
    console.log("🔄 Insertion des données...");

    // Seed categories
    const categoryLabels = [
      'Anneaux de Pouvoir',
      'Armes légendaires',
      'Objets magiques',
      'Reliques du Gondor'
    ];
    const categories = {};
    for (const label of categoryLabels) {
      const [category] = await Category.findOrCreate({ where: { name: label } });
      categories[label] = category;
    }

    // Seed users
    const userData = [
      ['gandalf', 'King123'],
      ['frodo', 'bearer0'],
      ['aragorn', 'heirofisildur']
    ];
    for (const [username, plainPassword] of userData) {
      const hashedPassword = await bcrypt.hash(plainPassword, 10);
      await User.findOrCreate({
        where: { username },
        defaults: { password: hashedPassword }
      });
    }

    // Seed products
    const products = {
      'RNG-ONE': {
        category: 'Anneaux de Pouvoir',
        label: 'Anneau Unique',
        imageUrl: 'https://lotr.example.com/images/one_ring.jpg'
      },
      'SWR-ANDURIL': {
        category: 'Armes légendaires',
        label: 'Andúril, Flamme de l’Ouest',
        imageUrl: 'https://lotr.example.com/images/anduril.jpg'
      },
      'OBJ-GALAD': {
        category: 'Objets magiques',
        label: 'Fiole de Galadriel',
        imageUrl: 'https://lotr.example.com/images/phial.jpg'
      },
      'REL-HORN': {
        category: 'Reliques du Gondor',
        label: 'Corne de Gondor',
        imageUrl: 'https://lotr.example.com/images/horn.jpg'
      }
    };
    const productInstances = {};
    for (const reference in products) {
      const { category, label, imageUrl } = products[reference];
      const [product] = await Product.findOrCreate({
        where: { reference },
        defaults: {
          label,
          imageUrl,
          categoryId: categories[category].id
        }
      });
      productInstances[reference] = product;
    }

    // Seed prices
    const prices = {
      'RNG-ONE': [
        ['2025-01-01 00:00:00', 999999.99],
        ['2025-06-01 00:00:00', 999999.99]
      ],
      'SWR-ANDURIL': [
        ['2025-01-15 00:00:00', 1200.0],
        ['2025-06-01 00:00:00', 1500.0]
      ],
      'OBJ-GALAD': [['2025-02-10 00:00:00', 300.0]],
      'REL-HORN': [
        ['2025-03-01 00:00:00', 450.0],
        ['2025-06-02 00:00:00', 480.0]
      ]
    };
    for (const ref in prices) {
      const product = productInstances[ref];
      for (const [date, price] of prices[ref]) {
        const test = await ProductPrice.findOrCreate({
          where: { date, productId: product.id, price }
        });
      }
    }

    // Seed daily product
    await DailyProduct.findOrCreate({
      where: {
        date: '2025-06-03',
        productId: productInstances['REL-HORN'].id
      }
    });

    // Seed stock movements
    const movements = [
      ['RNG-ONE', '2025-01-01', 'Trouvé dans les flammes du Mont Destin', 1, 0],
      ['RNG-ONE', '2025-06-01', 'Porté par Frodon au Mordor', 0, 1],
      ['SWR-ANDURIL', '2025-01-15', 'Forgé à Fondcombe', 5, 0],
      ['SWR-ANDURIL', '2025-06-01', 'Utilisé contre les Orques', 0, 1],
      ['OBJ-GALAD', '2025-02-10', 'Offert par Galadriel', 10, 0],
      ['OBJ-GALAD', '2025-06-02', 'Utilisé contre Shelob', 0, 1],
      ['REL-HORN', '2025-03-01', 'Reçu par Boromir', 3, 0],
      ['REL-HORN', '2025-06-02', 'Soufflé lors de l’attaque des Uruk-hai', 0, 1]
    ];
    for (const [ref, date, description, quantityIn, quantityOut] of movements) {
      const product = productInstances[ref];
      await StockMovement.findOrCreate({
        where: { productId: product.id, description },
        defaults: { date, quantityIn, quantityOut }
      });
    }

    // Seed produits
    const produits = [
      {
        id: 'PROD-001',
        reference: 'https://lotr.example.com/images/one_ring.jpg',
        libelle: 'Anneau Unique',
        estDuJour: false,
        prix: 45,
        quantiteEnStock: 23
      },
      {
        id: 'PROD-002',
        reference: 'https://lotr.example.com/images/anduril.jpg',
        libelle: 'Andúril, Flamme de l’Ouest',
        estDuJour: false,
        prix: 86,
        quantiteEnStock: 10
      },
      {
        id: 'PROD-003',
        reference: 'https://lotr.example.com/images/phial.jpg',
        libelle: 'Fiole de Galadriel',
        estDuJour: false,
        prix: 29,
        quantiteEnStock: 19
      },
      {
        id: 'PROD-004',
        reference: 'https://lotr.example.com/images/horn.jpg',
        libelle: 'Corne de Gondor',
        estDuJour: true,
        prix: 54,
        quantiteEnStock: 33
      }
    ];
    const produitInstances = await Produit.bulkCreate(produits, { ignoreDuplicates: true });

    // Seed Clients
    const clients = [
      {
        id: 'CLI-001',
        numero: '0320123456',
        pseudo: 'frodo_f',
        motDePasse: 'frodo_f',
        nom: 'Baggins',
        prenom: 'Frodo'
      },
      {
        id: 'CLI-002',
        numero: '0320789123',
        pseudo: 'aragorn_a',
        motDePasse: 'aragorn_a',
        nom: 'Elessar',
        prenom: 'Aragorn'
      },
      {
        id: 'CLI-003',
        numero: '0330192837',
        pseudo: 'legolas_l',
        motDePasse: 'legolas_l',
        nom: 'Greenleaf',
        prenom: 'Legolas'
      },
      {
        id: 'CLI-004',
        numero: '0340567890',
        pseudo: 'gandalf_g',
        motDePasse: 'gandalf_g',
        nom: 'Mithrandir',
        prenom: 'Gandalf'
      }
    ];
    const clientInstances = await Client.bulkCreate(clients, { ignoreDuplicates: true });

    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Erreur :", error);
  }

  // Seed produits
  const produits = [
      {
        id: 'PROD-001',
        reference: 'https://lotr.example.com/images/one_ring.jpg',
        libelle: 'Anneau Unique',
        estDuJour: false,
        prix: 45,
        quantiteEnStock: 23
      },
    {
      id: 'PROD-002',
      reference: 'https://lotr.example.com/images/anduril.jpg',
      libelle: 'Andúril, Flamme de l’Ouest',
      estDuJour: false,
      prix: 86,
      quantiteEnStock: 10
    },
    {
      id: 'PROD-003',
      reference: 'https://lotr.example.com/images/phial.jpg',
      libelle: 'Fiole de Galadriel',
      estDuJour: false,
      prix: 29,
      quantiteEnStock: 19
    },
    {
      id: 'PROD-004',
      reference: 'https://lotr.example.com/images/horn.jpg',
      libelle: 'Corne de Gondor',
      estDuJour: true,
      prix: 54,
      quantiteEnStock: 33
    }
  ];
  const produitInstances = await Produit.bulkCreate(produits, { ignoreDuplicates: true });
}

insertTestData();
