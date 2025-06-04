const { Pool } = require('pg');

const pool = new Pool({ user: 'postgres', host: 'localhost', 
                        database: 'gondor_chic_base', password: 'mdpprom15', port: 5432,
                    });

async function seed() {
  const client = await pool.connect();

  try {
    console.log("Starting database seeding...");

    await client.query(` 
        INSERT INTO roles (label) VALUES ('Admin'), ('Utilisateur') ON CONFLICT (label) DO NOTHING;`);

    await client.query(` 
        INSERT INTO categories (label) VALUES ('Anneaux'), ('Épées'), ('Potions'), ('Capes')
        ON CONFLICT (label) DO NOTHING;`);

    const { rows: adminRoles } = await client.query(`SELECT id FROM roles WHERE label = 'Admin'`);
    const adminRoleId = adminRoles[0].id;

    await client.query(`INSERT INTO users (username, password, role_id) 
        VALUES ('gandalf', 'King123', $1) ON CONFLICT (username) DO NOTHING;`, [adminRoleId]);

    console.log("Seeding finished successfully!");
  } catch (err) {
    console.error("Erreur", err);
  } finally {
    client.release();
    process.exit();
  }
}

seed();
