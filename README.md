# Payment Gateway Integration

This repository contains the backend implementation of a **Payment Gateway** using **Midtrans API** for processing payments in the **Internet Package** web application. It provides integration for both **server-side** payment processing and handling various payment methods.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Configuration](#api-configuration)
- [Midtrans API](#midtrans-api)
- [Database Setup](#database-setup)
- [Environment Variables](#environment-variables)

## Introduction

This repository contains a backend server built with **Node.js** (Express) for handling internet package purchases through the **Midtrans payment gateway**. It interacts with a MySQL database for storing package details and transaction history.

## Features

- **Payment Gateway Integration**: Uses **Midtrans** for secure payment transactions.
- **Package Listings**: Display various internet package options.
- **Checkout Process**: Handles the checkout process with integrated payment.
- **Transaction Management**: Records and manages successful transactions.

## Getting Started

To get started with this project on your local machine, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or above)
- **MySQL** or a similar relational database system

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Payment-Gateway.git
   cd Payment-Gateway
   
2.Install dependencies:
```bash
   npm install
```

3.Set up the database:

Create a new MySQL database named internet_packages.
Import the schema from the database.sql file.

4.Configure environment variables:

Create a .env file in the root directory and configure the following environment variables:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=internet_packages
PORT=5000

MIDTRANS_SERVER_KEY=Mid-server-ggsj3m11q8rxlA165bdSiBbi
MIDTRANS_CLIENT_KEY=Mid-client-gWgG7cRX1kSBmHYQ
MIDTRANS_IS_PRODUCTION=true
Replace Mid-server-ggsj3m11q8rxlA165bdSiBbi and Mid-client-gWgG7cRX1kSBmHYQ with your own Midtrans server and client keys.
```

5.Start the server:
```bash
   npm start
```
## API Configuration
To integrate Midtrans with this project, the following configuration is required in the server:
```bash
const midtransClient = require("midtrans-client");

const snap = new midtransClient.Snap({
  isProduction: false, // Set to true for production, false for sandbox mode
  serverKey: "SB-Mid-server-mlpK9SgUCxmpsnUCHoc29k_h", // Replace with your server key
  clientKey: "SB-Mid-client-NLDNwa2CkmKVO3rD", // Replace with your client key
});

module.exports = snap;
```

## Midtrans API
Midtrans provides a powerful API for handling payments. We use their Snap API to generate payment links and handle transaction notifications.

For detailed API documentation, visit the Midtrans Documentation.

Database Setup
Ensure your database is set up correctly:

MySQL: Make sure you have MySQL running locally or on a remote server.
Create Database: Create a database called internet_packages.
Tables: Import the schema and set up tables for packages, transactions, etc.
Example Table Schema
```bash
CREATE TABLE packages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category ENUM('Internet', 'Internet + TV', 'Gamer', 'Promo') NOT NULL,
  quota VARCHAR(255),
  price INT,
  description TEXT,
  image VARCHAR(255)
);

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  package_id INT,
  user_id INT,
  transaction_status VARCHAR(255),
  transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (package_id) REFERENCES packages(id)
);
```
## Environment Variables
The following environment variables are required to run the application:

DB_HOST: Database host (default localhost)
DB_USER: Database username (default root)
DB_PASSWORD: Database password (leave empty for no password)
DB_NAME: Name of the MySQL database (default internet_packages)
PORT: Port on which the server will run (default 5000)
MIDTRANS_SERVER_KEY: Server key for Midtrans API (Production/Sandbox)
MIDTRANS_CLIENT_KEY: Client key for Midtrans API
MIDTRANS_IS_PRODUCTION: Set to true for production, false for sandbox mode

Developed by Priamitra
