# 💰 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system for managing financial records with **role-based access control (RBAC)**. It allows users to create, view, update, and analyze financial data such as income and expenses.

The system demonstrates backend concepts like **API design, authentication, authorization, data modeling, filtering, pagination, and aggregation**.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access control (RBAC) using middleware
* Roles:

  * **Admin** → Full access (create, update, delete records)
  * **Analyst** → Read records + view analytics
  * **Viewer** → Read-only access

---

### 💰 Financial Records Management

* Create financial records (Admin only)
* Get all records with:

  * Filtering (type, category, date range)
  * Pagination
* Get single record by ID
* Update record (Admin only)
* Delete record (Admin only)

---

### 📊 Dashboard APIs

* Total income
* Total expenses
* Net balance
* Category-wise summary (using MongoDB aggregation)

---

### 🛡️ Validation & Error Handling

* Input validation for required fields
* Proper HTTP status codes
* Error handling using try-catch blocks

---

## 🏗️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JSON Web Tokens (JWT)
* **API Documentation:** Swagger (swagger-jsdoc, swagger-ui-express)

---

## 📁 Folder Structure

```
backend/
│── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
│
│── server.js
│── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd backend
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Create `.env` file

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server

```
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 🔐 Auth APIs

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register user       |
| POST   | /api/auth/login    | Login and get token |

---

### 💰 Record APIs

| Method | Endpoint         | Description                           |
| ------ | ---------------- | ------------------------------------- |
| POST   | /api/records     | Create record (Admin)                 |
| GET    | /api/records     | Get all records (filter + pagination) |
| GET    | /api/records/:id | Get single record                     |
| PUT    | /api/records/:id | Update record (Admin)                 |
| DELETE | /api/records/:id | Delete record (Admin)                 |

---

### 📊 Summary APIs

| Method | Endpoint                      | Description              |
| ------ | ----------------------------- | ------------------------ |
| GET    | /api/records/summary          | Income, expense, balance |
| GET    | /api/records/category-summary | Category-wise totals     |

---

## 🔍 Query Parameters (Filtering & Pagination)

Example:

```
/api/records?type=income&category=salary&page=1&limit=5
```

| Parameter | Description       |
| --------- | ----------------- |
| type      | income / expense  |
| category  | category name     |
| startDate | filter start date |
| endDate   | filter end date   |
| page      | page number       |
| limit     | records per page  |

---

## 🔐 Authorization

This project uses JWT-based authentication.

After login, a token is returned which must be included in request headers for protected routes.

### 📌 Header Format

```
Authorization: <your_token>
```

⚠️ Note:
The token is passed directly without the `Bearer` prefix.

---

## 📚 API Documentation (Swagger)

Interactive API documentation is available using Swagger.

### 🚀 Access Swagger UI

```
http://localhost:5000/api-docs
```

### 📌 Features

* View all API endpoints
* Understand request/response formats
* Test APIs directly from browser

### 🔐 Authentication in Swagger

For protected routes, include token in headers:

```
Authorization: <your_token>
```

---

## 🧪 API Testing

APIs were tested using Postman.

Steps:

1. Register user
2. Login to get JWT token
3. Add token in Authorization header
4. Test all endpoints

---

## 🧠 Design Decisions

* Used **MVC architecture** for clean separation of concerns
* Implemented **role-based middleware** for access control
* Used **MongoDB aggregation** for analytics APIs
* Designed flexible filtering using query parameters

---

## 🚀 Future Improvements

* Monthly / weekly analytics
* Search functionality
* User management APIs
* Deployment (Render / AWS)

---

## 👨‍💻 Author

Shrajjal Prakash

---
