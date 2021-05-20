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
    session_id TEXT REFERENCES sessions(sid) ON DELETE CASCADE,
    products JSON 
);

CREATE TABLE cheeses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT,
    price INTEGER NOT NULL,
    organic BOOLEAN NOT NULL,
    vegetarian BOOLEAN NOT NULL
);

INSERT INTO cheeses (name, description, image, price, organic, vegetarian) 
VALUES 
('Baron Bigod Brie', 'Baron Bigod is an exquisite Suffolk made, bloomy unpasteurised cows milk cheese.', 'baron', 7, false, false),
('Chabichou de Poitou', 'A traditional semi-soft, unpasteurised, natural-rinded goats cheese', 'chabichou', 8, false, false),
('Idiázabal', 'Idiázabal hails from the Basque country in Spain. During production, the wheels were traditionally smoked over beechwood, hawthorn, or cherry for 10 days, imparting a slight smoky quality that would add depth to the rich, nutty flavor of this sheep milk cheese. Idiázabal has a firm texture, similar to Zamorano, Roncal, and Manchego.', 'idiazabal', 14, false, false),
('Hoja Santa', 'The Hoja Santa leaf imparts subtle tones of sassafras, anise, mint, black pepper to this soft, fresh chèvre.', 'hoja', 10, false, false),
('Fosseway Fleece', 'The texture of Fosseway Fleece is remarkably smooth and creamy. The flavour has a fresh and clean taste that ends in a nutty, mellow tang.', 'fleece', 9, false, false),
('Caerfai Cheddar', 'Caerfai Cheddar is a traditional unpasteurised Cheddar made by hand on Caerfai Farm near St Davids in Pembrokeshire.', 'cheddar', 5, false, false);

COMMIT;