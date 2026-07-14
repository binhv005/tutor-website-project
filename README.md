# 🎓 Tutor Center Management System

A full-stack web application for managing tutoring center operations.

The system provides an admin dashboard that allows administrators to manage tutoring classes, handle consultation requests, and organize teaching information efficiently.


---

# 🌐 Demo

## Frontend

🔗 https://tutor-website-project-ten.vercel.app

## Backend API

🔗 https://tutor-website-project.onrender.com

## API Documentation (Swagger)

🔗 https://tutor-website-project.onrender.com/api-docs

---

# 🔑 Demo Account

You can use the following account to test the application:

| Field    | Value          |
| -------- | -------------- |
| Username | `admin`        |
| Password | `Admin@123456` |
| Role     | `ADMIN`        |

> This account is provided for demo purposes.

---

# ✨ Features

## 🔐 Authentication

* Admin Login
* JWT Authentication
* HttpOnly Cookie Storage
* Protected API Routes
* Role-based Authorization

## 📚 Class Management

Administrators can:

* Create new classes
* Update class information
* Delete classes
* Change class status
* View class list
* Pagination
* Filter classes by:

  * Subject
  * Grade
  * Status
  * Address
  * Teacher requirements
* Export class information to text

## 📞 Consultation Management

Administrators can:

* Receive consultation requests from public website
* View consultation information
* Update consultation status:

  * Pending
  * Contacted
* Delete consultation requests

## 📡 API & Validation

* RESTful API
* Swagger API Documentation
* Zod Request Validation
* Vietnamese Phone Number Validation
* Tuition Format Validation
* Weekly Sessions Validation

## 🎨 UI Features

* Responsive Admin Dashboard
* Modal Form
* Loading State
* Confirmation Dialog
* Pagination
* Debounced Search

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Axios
* Tailwind CSS
* FontAwesome

## Backend

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL
* JWT
* bcrypt
* Zod

## Database

* PostgreSQL

Production Database:

* Neon PostgreSQL

## Deployment

Frontend:

* Vercel

Backend:

* Render

Database:

* Neon PostgreSQL

---

# 🏗 System Architecture

<div align="center">

<img src="./screenshots/architecture.png" width="350"/>

</div>

Architecture flow:

```
User
 |
 |
React Frontend (Vercel)
 |
 |
Axios Request
 |
 |
Express REST API (Render)
 |
 |
Prisma ORM
 |
 |
PostgreSQL Database (Neon)
```

---

# 📁 Project Structure

```
backend
│
├── src
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── routes
│   ├── services
│   ├── validators
│   ├── utils
│   └── app.js
│
├── prisma
│
└── package.json


frontend
│
├── src
│   ├── api
│   ├── components
│   ├── pages
│   ├── layouts
│   ├── hooks
│   └── App.jsx
```

---

# 🗄 Database Design

Main entities:

* User
* Class
* Consultation

Relationship:

```
Admin (1)
    |
    |
    └──────────< Class (N)
```

---

# 🔐 Authentication Flow

```
Admin Login

      |
      ▼

Validate username/password

      |
      ▼

Compare password with bcrypt

      |
      ▼

Generate JWT Token

      |
      ▼

Store token in HttpOnly Cookie

      |
      ▼

Access Protected APIs
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/binhv005/tutor-website-project.git
```

# Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
DATABASE_URL="your_postgresql_url"

JWT_SECRET="your_secret"

CLIENT_URL="http://localhost:5173"

PORT=5050
```

Run Prisma migration:

```bash
npx prisma migrate dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

Start backend:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5050
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5050/api
```

Run:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📡 REST API

## Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | `/api/auth/login`  |
| POST   | `/api/auth/logout` |

## Classes

| Method | Endpoint           |
| ------ | ------------------ |
| GET    | `/api/classes`     |
| POST   | `/api/classes`     |
| PUT    | `/api/classes/:id` |
| DELETE | `/api/classes/:id` |

## Consultations

| Method | Endpoint                 |
| ------ | ------------------------ |
| GET    | `/api/consultations`     |
| PUT    | `/api/consultations/:id` |
| DELETE | `/api/consultations/:id` |

---

# 📌 Validation Rules

## Tuition Format

Examples:

```
120k/buổi

300k/buổi

3tr/tháng
```

## Weekly Sessions

Examples:

```
3 buổi/tuần

2 buổi/tuần Thứ 2 4 6
```

## Phone Number

Only Vietnamese phone numbers are accepted.

---

# 🎯 Future Improvements

* Dashboard analytics
* Export data to Excel/PDF
* Tutor management module
* Email notifications
* Activity logs
* Unit Testing & Integration Testing
* Docker deployment
* CI/CD with GitHub Actions
* Redis caching
* Logging with Winston/Morgan

---

# 👨‍💻 Author

**Bình Võ**

Backend Developer Intern Candidate

GitHub:

https://github.com/binhv005

---

# 📄 License

This project is created for learning and portfolio purposes.
