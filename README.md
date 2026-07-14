# 🎓 Tutor Center Management System

A full-stack web application for managing tutoring classes in a tutoring center. The system allows administrators to manage classes, update their status, and organize tutoring requests through a clean dashboard.

> Developed as a portfolio project for Backend Developer Internship.

---

## 📸 Demo

Frontend:

https://tutor-website-project-ten.vercel.app

Backend API:

https://tutor-website-project.onrender.com

API Documentation:

https://tutor-website-project.onrender.com/api-docs

---

## ✨ Features

### Authentication

* Admin Login
* JWT Authentication
* HttpOnly Cookie
* Protected Routes
* Role-based Authorization

### Class Management

* Create new class
* Update class information
* Delete class
* Change class status
* Pagination
* Filter by subject
* Filter by grade
* Filter by status
* Export class information to text

### Consultation Management
* Submit consultation requests from the public website
* View consultation requests in the Admin Dashboard
* Update consultation status (Pending / Contacted)
* Delete consultation requests


### API & Validation
* RESTful API
* Swagger API Documentation
* Zod Request Validation
* Vietnamese Phone Number Validation
* Tuition Format Validation
* Weekly Sessions Validation

### UI

* Responsive Dashboard
* Modal Form
* Loading State
* Confirmation Dialog
* Pagination
* Debounced Search

---

# 🛠 Tech Stack

## Frontend

* React
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
* Zod

  
### Database


* PostgreSQL
* Neon PostgreSQL (Production)
---

### Deployment

Frontend:

* Vercel

Backend:

* Render

Database:

* Neon

# 🏗 System Architecture
<img width="277" height="649" alt="image" src="https://github.com/user-attachments/assets/76b66dc2-eb18-4beb-9d90-b30e4e58bd41" />


# 📁 Project Structure

```text
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

# 🗄 Database

Main entities

* User (Admin)
* Class

Relationship

```text
Admin (1)
      │
      │
      └───────────< Class (N)
```

---

# 🔐 Authentication Flow

```text
Admin Login
      │
      ▼
Verify Password
      │
      ▼
Generate JWT
      │
      ▼
Store HttpOnly Cookie
      │
      ▼
Protected API
```

---

# 🚀 Installation

## Clone project

```bash
git clone https://github.com/binhv005/tutor-website-project.git
```

---

## Backend

```bash
cd backend
npm install
```

Create `.env`

```env
DATABASE_URL="postgresql://..."
JWT_SECRET=your_secret
PORT=5000
```

Run migration

```bash
npx prisma migrate dev
```

Generate Prisma Client

```bash
npx prisma generate
```

Start server

```bash
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 📡 REST API

## Authentication

| Method | Endpoint     |
| ------ | ------------ |
| POST   | /auth/login  |
| POST   | /auth/logout |

---

## Classes

| Method | Endpoint     |
| ------ | ------------ |
| GET    | /classes     |
| POST   | /classes     |
| PUT    | /classes/:id |
| DELETE | /classes/:id |

---

# 📌 Validation Rules

### Tuition

Examples

```
120k/buổi
300k/buổi
3tr/tháng
```

---

### Weekly Sessions

Examples

```
3 buổi/tuần
2 buổi/tuần Thứ 2 4 6
```

---

### Phone

Vietnamese phone numbers only.

---

# 🎯 Future Improvements

* Dashboard analytics (Total classes, consultations, completed classes)
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

Backend Developer (Node.js)

---

# 📄 License

This project is created for learning and portfolio purposes.
