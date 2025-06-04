CREATE DATABASE gondor_chic_base;
\c gondor_chic_base;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(40) NOT NULL UNIQUE,
    role_id INTEGER NOT NULL REFERENCES roles(id),
    password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    reference VARCHAR(255) NOT NULL UNIQUE,
    label VARCHAR(255) NOT NULL UNIQUE,
    image_url VARCHAR(255) NOT NULL
);

CREATE TABLE daily_products (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE product_prices (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    price NUMERIC NOT NULL CHECK (price > 0)
);

CREATE TABLE stock_movements (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    description VARCHAR(255) NOT NULL,
    quantity_in NUMERIC NOT NULL CHECK (quantity_in >= 0),
    quantity_out NUMERIC NOT NULL CHECK (quantity_out >= 0)
);

    CHECK (quantity_in > 0 OR quantity_out > 0)