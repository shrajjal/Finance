# 💰 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system for managing financial records with **role-based access control**. It allows users to create, view, update, and analyze financial data such as income and expenses.

The system is designed to demonstrate **API design, data modeling, authentication, authorization, and business logic implementation**.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access control (RBAC)
* Roles:

  * **Admin** → Full access (CRUD + user management)
  * **Analyst** → Read + analytics
  * **Viewer** → Read-only

---

### 💰 Financial Records Management

* Create financial records
* Get all records with:

  * Filtering (type, category, date)
  * Pagination
* Get single record
* Update record (Admin only)
* Delete record (Admin only)

---

### 📊 Dashboard APIs

* Total income
* Total expense
* Net balance
* Category-wise summary (MongoDB aggregation)

---

### 🛡️ Validation & Error Handling

* Input validation for required fields
* Proper HTTP status codes
* Error handling using try-catch

---

## 🏗️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JSON Web Tokens (JWT)
* **API Docs:** Swagger

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

Server will run on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 🔐 Auth APIs

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register user     |
| POST   | /api/auth/login    | Login & get token |

---

### 💰 Record APIs

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | /api/records     | Create record (Admin) |
| GET    | /api/records     | Get all records       |
| GET    | /api/records/:id | Get single record     |
| PUT    | /api/records/:id | Update record (Admin) |
| DELETE | /api/records/:id | Delete record (Admin) |

---

### 📊 Summary APIs

| Method | Endpoint                      | Description              |
| ------ | ----------------------------- | ------------------------ |
| GET    | /api/records/summary          | Income, expense, balance |
| GET    | /api/records/category-summary | Category-wise totals     |

---

## 🔍 Query Parameters (Filtering & Pagination)

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

## 🔐 Authorization Header

```
Authorization: <your_token>
```

---

## 🧪 API Testing

APIs were tested using **Postman**.

Steps:

1. Register user
2. Login to get JWT token
3. Add token in headers
4. Test all endpoints

---

## 📚 API Documentation

Swagger UI available at:

```
http://localhost:5000/api-docs
```

---

## 🧠 Design Decisions

* Used **MVC architecture** for separation of concerns
* Implemented **middleware-based RBAC** for clean access control
* Used **MongoDB aggregation** for analytics APIs
* Designed flexible query-based filtering

---

## 🚀 Future Improvements

* Monthly/weekly analytics
* Search functionality
* User management APIs
* Deployment (Render / AWS)

---

## 👨‍💻 Author

Shrajjal  Prakash

---
