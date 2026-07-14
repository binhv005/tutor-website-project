# 🎓 Tutor Center Management System

A full-stack web application for managing tutoring classes in a tutoring center. The system allows administrators to manage classes, update their status, and organize tutoring requests through a clean dashboard.

> Developed as a portfolio project for Backend Developer Internship.

---

## 📸 Demo
* Login
* <img width="1920" height="832" alt="image" src="https://github.com/user-attachments/assets/e77edc9a-171a-4200-be00-d06b24b1897b" />
* Dashboard
* Class Management
* Filtering & Search
* Export Class Information

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

### Validation

* Zod Validation
* Vietnamese phone validation
* Tuition format validation
* Weekly sessions validation

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

---

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
git clone https://github.com/your-username/tutor-management-system.git
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

* Contact management module
* Dashboard statistics
* Export Excel/PDF
* Image upload
* Activity log
* Search optimization
* Unit Testing
* Docker Deployment
* CI/CD Pipeline

---

# 👨‍💻 Author

**Bình Võ**

Backend Developer (Node.js)

---

# 📄 License

This project is created for learning and portfolio purposes.
