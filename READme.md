# 📦 Compass Product

RESTful API for product management developed with Node.js, Express, and TypeScript.
It supports product creation, retrieval, update, and deletion (CRUD), including data validation.
---

## 🚀 Features

- Create product
- Get product by ID
- List all products
- Update product
- Delete product
---

## 🛠️ Technologies Used

- [TypeScript](https://www.typescriptlang.org/) – Typed superset of JavaScript
- [Node.js](https://nodejs.org/) – JavaScript runtime environment
- [Express.js](https://expressjs.com/) – Web framework for Node.js
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) – Linting tool for identifying and fixing code problems and Code formatter for consistent code style
- [Prisma ORM](https://www.prisma.io/) – Type-safe database access and migrations
- [PostgreSQL](https://www.postgresql.org/) – Relational database system
- [CORS](https://expressjs.com/en/resources/middleware/cors.html) – Middleware for handling Cross-Origin Resource Sharing
- [dotenv](https://github.com/motdotla/dotenv) – Loads environment variables from .env file
- [ts-node-dev](https://github.com/wclr/ts-node-dev) – TypeScript execution with hot-reload during development
---

## How to Run This Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/compassproduct.git
cd compassproduct
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Set Environment Variables

```bash
DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/compassproduct?schema=public"
PORT=3000
```
> Replace yourpassword with your PostgreSQL user password.

## Database Setup

### 1. Create the database

```bash
CREATE DATABASE compassproduct;
```
### 2. Define the Product schema with Prisma

The product table includes:

- id: auto-increment numeric ID (primary key)
- name: required text
- description: required text
- price: required number
- quantity: required number
- created_at: timestamp (default: now)
- updated_at: timestamp (default: now)

> You can find this schema defined in prisma/schema.prisma.
### 3. Run Prisma migrations

```bash
npx prisma migrate dev --name init
npx prisma generate
```
## Running the Application

```bash
npm run dev
```
---

## API Endpoints
> Base URL: `http://localhost:3000`

### **Create Product**<br>
`POST /api/products`

**Request Body:**

```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "quantity": 10
}
```

**Response:**

- `201 Created`: returns the created product.
- `400 Bad Request`: invalid fields.
- `409 Conflict`: name already registered.

### **Get Product by ID**<br>
`GET /api/product/:id`

**Path Parameter:**

- `id`: número do produto (obrigatório)

**Response:**

- `200 OK`: returns the product.
- `400 Bad Request`: invalid ID.
- `404 Not Found`: product not found.
  
### **Get All Products**<br>
`GET /api/products`<br>
`GET /api/products?page=1` (with pagination)

**Query Parameters:**

- `page` (optional, default: 1)
- `limit` (optional, default: 5)

**Response:**

```json
{
  "page": 1,
  "total": 5,
  "count": 10,
  "data": [
    {
      "id": 1,
      "name": "Product 1",
      "description": "Description",
      "price": 50,
      "quantity": 5,
      "created_at": "...",
      "updated_at": "..."
    }
  ]
}
```

### **Update Product**<br>
`PATCH /api/products/:id`

**Path Parameter:**

- `id`: product number

**Partial Request Body Example:**

```json
{
  "name": "Updated name",
  "price": 150
}
```

**Response:**

- `204 No Content`: successfully updated.
- `400 Bad Request`: invalid ID.
- `404 Not Found`:  product not found.
- `409 Conflict`:  name already exists.

### **Delete Product**<br>
`DELETE /api/product/:id`

**Path Parameter:**

- `id`: product number

**Response:**

- `204 No Content`: successfully deleted.
- `404 Not Found`: product not found.
- `400 Bad Request`: invalid ID.

---

### **Generic Error**

```json
{
  "errors": ["product not found"]
}
```

## Linting and Formatting
To check code quality and format:
```bash
npm run lint        # ESLint
npm run format      # Prettier
```
## Testing
You can test the endpoints using tools like:

- Insomnia 
- Postman
> I used Insomnia to send a request to http://localhost:3000/endpoints

---

##  Developed by

[Samilly Beatriz](https://github.com/SamillyBeatriz)  
📧 samilly.beatriz23@gmail.com
💼 [LinkedIn](https://www.linkedin.com/in/samillybeatrizz/)  

