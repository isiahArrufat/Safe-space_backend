-- db/schema.sql
DROP DATABASE IF EXISTS authdb;

CREATE DATABASE authdb;


\c authdb

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE teapots (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  image TEXT NOT NULL,
  price INTEGER NOT NULL,
  description VARCHAR(500),
  material TEXT,
  capacity INTEGER
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  content VARCHAR(500),
  rating NUMERIC
  CHECK(rating >= 1 AND rating <= 5),
  created_at TEXT,
  updated_at TEXT,
  teapot_id INTEGER REFERENCES teapots(id),
  user_id INTEGER REFERENCES users(id)
  ON DELETE CASCADE
);

