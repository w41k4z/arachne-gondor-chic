const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gondor_chic_base',
  password: 'mdpprom15',
  port: 5432,
});

async function seed() {
  const client = await pool.connect();

  try {
    console.log("Starting database seeding...");
    await client.query(`
        INSERT INTO categories (label) VALUES   ('Anneaux de Pouvoir'),('Armes légendaires'),
                                                ('Objets magiques'), ('Reliques du Gondor')
        ON CONFLICT (label) DO NOTHING;
    `);

    await client.query(`
        INSERT INTO users (username, password) VALUES   ('gandalf', 'King123'),
                                                        ('frodo', 'bearer0'),
                                                        ('aragorn', 'heirofisildur')
        ON CONFLICT (username) DO NOTHING;
    `);

    const { rows: categories } = await client.query(`SELECT id, label FROM categories`);
    const catMap = {};
    categories.forEach(cat => catMap[cat.label] = cat.id);

    await client.query(`
      INSERT INTO products (category_id, reference, label, image_url) VALUES
      ($1, 'RNG-ONE', 'Anneau Unique', 'https://lotr.example.com/images/one_ring.jpg'),
      ($2, 'SWR-ANDURIL', 'Andúril, Flamme de l’Ouest', 'https://lotr.example.com/images/anduril.jpg'),
      ($3, 'OBJ-GALAD', 'Fiole de Galadriel', 'https://lotr.example.com/images/phial.jpg'),
      ($4, 'REL-HORN', 'Corne de Gondor', 'https://lotr.example.com/images/horn.jpg')
      ON CONFLICT (reference) DO NOTHING;
    `, [
      catMap['Anneaux de Pouvoir'],
      catMap['Armes légendaires'],
      catMap['Objets magiques'],
      catMap['Reliques du Gondor']
    ]);

    const { rows: products } = await client.query(`SELECT id, reference FROM products`);
    const prodMap = {};
    products.forEach(prod => prodMap[prod.reference] = prod.id);

    await client.query(`INSERT INTO product_prices (date, product_id, price) VALUES ('2025-01-01', $1, 999999.99), ('2025-06-01', $1, 999999.99) ON CONFLICT (date, product_id) DO NOTHING;`, [ prodMap['RNG-ONE'] ]);
    await client.query(`INSERT INTO product_prices (date, product_id, price) VALUES ('2025-01-15', $1, 1200.00), ('2025-06-01', $1, 1500.00) ON CONFLICT (date, product_id) DO NOTHING;`, [ prodMap['SWR-ANDURIL'] ]);
    await client.query(`INSERT INTO product_prices (date, product_id, price) VALUES ('2025-02-10', $1, 300.00) ON CONFLICT (date, product_id) DO NOTHING;`, [ prodMap['OBJ-GALAD'] ]);
    await client.query(`INSERT INTO product_prices (date, product_id, price) VALUES ('2025-03-01', $1, 450.00), ('2025-06-02', $1, 480.00) ON CONFLICT (date, product_id) DO NOTHING; `, [ prodMap['REL-HORN'] ]);
    
    await client.query(`INSERT INTO daily_products (date, product_id) VALUES ('2025-06-03', $1), ('2025-06-03', $2) ON CONFLICT (date, product_id) DO NOTHING;`, [prodMap['RNG-ONE'],prodMap['REL-HORN'],]);

    await client.query(`
      INSERT INTO stock_movements (product_id, date, description, quantity_in, quantity_out) VALUES
      ($1, '2025-01-01', 'Trouvé dans les flammes du Mont Destin', 1, 0),
      ($1, '2025-06-01', 'Porté par Frodon au Mordor', 0, 1),
      ($2, '2025-01-15', 'Forgé à Fondcombe', 5, 0),
      ($2, '2025-06-01', 'Utilisé contre les Orques', 0, 1),
      ($3, '2025-02-10', 'Offert par Galadriel', 10, 0),
      ($3, '2025-06-02', 'Utilisé contre Shelob', 0, 1),
      ($4, '2025-03-01', 'Reçu par Boromir', 3, 0),
      ($4, '2025-06-02', 'Soufflé lors de l’attaque des Uruk-hai', 0, 1)
      ON CONFLICT (product_id, date, description) DO NOTHING;
    `, [
      prodMap['RNG-ONE'],
      prodMap['SWR-ANDURIL'],
      prodMap['OBJ-GALAD'],
      prodMap['REL-HORN']
    ]);

    console.log("Seeding finished successfully!");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    client.release();
    process.exit();
  }
}

seed();
