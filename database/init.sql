BEGIN;

DROP TABLE IF EXISTS users, sessions, basket, cheeses CASCADE;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL    
);

CREATE TABLE sessions (
    sid TEXT PRIMARY KEY,
    data JSON NOT NULL
);

CREATE TABLE basket (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    products JSON 
);

CREATE TABLE cheeses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image BYTEA,
    price INTEGER NOT NULL,
    organic BOOLEAN NOT NULL,
    vegetarian BOOLEAN NOT NULL
);

INSERT INTO cheeses (name, description, price, organic, vegetarian) 
VALUES 
('Baron Bigod Brie', 'Baron Bigod is an exquisite Suffolk made, bloomy unpasteurised cows milk cheese.', 290, false, false)
('Chabichou de Poitou', 'A traditional semi-soft, unpasteurised, natural-rinded goats cheese.', 850, false, false)

COMMIT;