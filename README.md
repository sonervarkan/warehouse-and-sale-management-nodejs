# warehouse-and-sale-management

Product-Calculator is a complete product, stock, customer, sales, and invoice management system built with Node.js, Express, MySQL, Pug, Bootstrap, and Vanilla JavaScript.

The application includes:

User login & registration

Adding and selling products

Automatic stock updates

Data query pages

Multi-table joined SQL results

Stock movement records

Printable reports (single-section print)

## Project Structure

The project structure is reorganized so that app.js is in the root, and all backend logic files are inside the routes folder:

Product-Calculator
 ├── app.js
 ├── package.json
 ├── /routes
 │    ├── login.js
 │    ├── register.js
 │    ├── saleform.js
 │    ├── dataquery.js
 │    ├── stockmovements.js
 │    └── print.js
 ├── /utility
 │    └── database.js
 ├── /public
 │    ├── /css
 │    │    └── style.css
 │    ├── /js
 │    │    └── print.js
 │    ├── /img
 │    │    └── aku.webp
 ├── /views
 │    ├── index.pug
 │    ├── login.pug
 │    ├── register.pug
 │    ├── saleform.pug
 │    ├── customers.pug
 │    ├── products.pug
 │    ├── invoices.pug
 │    ├── sales.pug
 │    ├── multiplequery.pug
 │    ├── stockmovements.pug
 │    └── dataquery.pug
 └── README.md

## Features
### Authentication

Login & logout system

Session-based user authentication

Protected pages

Registration page

### Sales Management

Add customer

Add product

Create invoice

Validate stock quantity

Deduct stock automatically after sale

Insert all records with relational integrity

### Data Query Pages

Each query page displays database results dynamically:

Customers

Products

Sales

Invoices

Multi-join SQL query (customers + products + invoices + sales + stocks)

Date input supports:
dd-mm-yyyy, dd.mm.yyyy, yyyy/mm/dd

### Stock Movements

Add stock movement

Increase existing stock

View stock by stock code

### Print Selected Area

Only prints the section wrapped in:

<div id="toPrint">...</div>

## Styling (style.css)

The system includes animated text and moving image effects:

### Color-changing animated text
.light {
  font-size: 24px;
  font-weight: bold;
  animation: colorChange 5s infinite;
}

### Moving text animation

Moving, color-cycling text styles for dynamic UI elements.

### Floating image animation

The homepage image moves to a random position every 2 seconds.

## Installation
1️⃣ Clone the repository
git clone https://github.com/yourname/Product-Calculator.git
cd Product-Calculator

2️⃣ Install dependencies
npm install

3️⃣ Configure database

Edit:
/utility/database.js

const conn = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "your password",
    database: "your database"
});

4️⃣ Start the server
node app.js

5️⃣ Open in the browser
http://localhost:3000

## Important Files Explained
### app.js

Main application file.
Loads express, sessions, routers, database, static files, and template engine.

### /routes

Contains all backend logic:

File	Purpose
login.js	User authentication
register.js	User registration
saleform.js	Sales + stock update + invoice + customer + product creation
dataquery.js	Query pages (customers, products, sales, invoices, joined query)
stockmovements.js	Add stock movement + update quantity
print.js	Print functionality for selected elements

### /views

Contains all Pug templates.

### /public

Static files (CSS, JS, images).

## Print Script (print.js)
document.querySelector(".fa-print").addEventListener("click", function() {
    const printContents = document.getElementById("toPrint").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
});

## License

This project currently has no license.
If you plan to publish or distribute it, you should add one (MIT recommended).
