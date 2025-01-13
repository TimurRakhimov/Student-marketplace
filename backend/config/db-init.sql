-- Define ENUM type for user roles
CREATE TYPE user_role AS ENUM ('buyer', 'seller', 'both');

-- Users table
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role user_role DEFAULT 'buyer',
    date_joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Items table
CREATE TABLE Items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    seller_id INTEGER REFERENCES Users(id),
    buy_instant_price DECIMAL(10, 2) NOT NULL,
    min_bid_price DECIMAL(10, 2) NOT NULL,
    current_bid DECIMAL(10, 2),
    is_closed BOOLEAN DEFAULT FALSE,
    date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bids table
CREATE TABLE Bids (
    id SERIAL PRIMARY KEY,
    item_id INTEGER REFERENCES Items(id),
    buyer_id INTEGER REFERENCES Users(id),
    bid_amount DECIMAL(10, 2) NOT NULL,
    bid_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_winner BOOLEAN DEFAULT FALSE
);

-- Conversations table
CREATE TABLE Conversations (
    id SERIAL PRIMARY KEY,
    buyer_id INTEGER REFERENCES Users(id),
    seller_id INTEGER REFERENCES Users(id),
    item_id INTEGER REFERENCES Items(id),
    last_message TEXT,
    last_message_time TIMESTAMP
);

-- Messages table
CREATE TABLE Messages (
    id SERIAL PRIMARY KEY,
    conversation_id INTEGER REFERENCES Conversations(id),
    sender_id INTEGER REFERENCES Users(id),
    receiver_id INTEGER REFERENCES Users(id),
    message TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE
);
