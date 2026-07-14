# 🎓 Tutor Center Management System

A full-stack web application for managing tutoring classes in a tutoring center. The system allows administrators to manage classes, update their status, and organize tutoring requests through a clean dashboard.

> Developed as a portfolio project for Backend Developer Internship.

---

## 📸 Demo
* Login
<img width="1920" height="832" alt="image" src="https://github.com/user-attachments/assets/e77edc9a-171a-4200-be00-d06b24b1897b" />
* Class Management
<img width="1891" height="835" alt="image" src="https://github.com/user-attachments/assets/54b9bbd2-61fd-4f1d-9928-cff018634b92" />
* Filtering & Search
<img width="1470" height="655" alt="image" src="https://github.com/user-attachments/assets/955c6399-4fe0-4f00-be43-eeadf04b395f" />
* Contact Management
* <img width="1920" height="838" alt="image" src="https://github.com/user-attachments/assets/23106bee-47fa-4da4-95c7-9f53314c1cbc" />

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
[git clone https://github.com/your-username/tutor-management-system.git](https://github.com/binhv005/tutor-website-project.git)
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
