-- Connexion à la base
\c gondor_chic_base;

-- 1. Insertion de catégories mystiques
INSERT INTO categories (name) VALUES 
('Potions'),
('Artefacts'),
('Grimoires'),
('Talismans');

-- 2. Insertion d’utilisateurs mystiques
INSERT INTO users (username, password) VALUES 
('archimage', 'mana2025'),
('alchimiste', 'poudre123'),
('gardien', 'bouclier!');

-- 3. Insertion de produits magiques
INSERT INTO products (category_id, reference, label, image_url) VALUES 
(1, 'POT-ELX01', 'Élixir de guérison', 'https://example.com/img/elixir.jpg'),
(2, 'ARF-BCL02', 'Bouclier du destin', 'https://example.com/img/bouclier.jpg'),
(3, 'GRM-NTC03', 'Grimoire du néant', 'https://example.com/img/grimoire.jpg'),
(4, 'TLM-FRT04', 'Talisman de la fortune', 'https://example.com/img/talisman.jpg');

-- 4. Insertion des prix par date
INSERT INTO product_prices (date, product_id, price) VALUES 
('2025-05-01', 1, 35.00),
('2025-06-01', 1, 33.00), -- prix actuel

('2025-05-10', 2, 250.00),
('2025-06-01', 2, 270.00), -- prix actuel

('2025-05-15', 3, 480.00), -- seul prix

('2025-05-20', 4, 90.00),
('2025-06-02', 4, 85.00); -- prix actuel

-- 5. Produits du jour (ex : produits en promotion ou mis en avant)
INSERT INTO daily_products (date, product_id) VALUES 
('2025-06-03', 1),
('2025-06-03', 4);

-- 6. Mouvements de stock magiques
INSERT INTO stock_movements (product_id, date, description, quantity_in, quantity_out) VALUES 
(1, '2025-05-01', 'Livraison de l’herboristerie', 100, 0),
(1, '2025-06-01', 'Vente lors du marché elfique', 0, 25),

(2, '2025-05-10', 'Récupéré dans les ruines anciennes', 10, 0),
(2, '2025-06-01', 'Utilisé par un paladin', 0, 2),

(3, '2025-05-15', 'Tiré de la bibliothèque maudite', 5, 0),
(3, '2025-06-02', 'Consulté lors d’un rituel', 0, 1),

(4, '2025-05-20', 'Offert par les esprits du vent', 50, 0),
(4, '2025-06-02', 'Donné à un héros en quête', 0, 5);
