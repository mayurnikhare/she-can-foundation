# 🌸 She Can Foundation - Full Stack Web Application

A modern full-stack web application built for **She Can Foundation** to collect contact messages, manage submissions, and provide an admin dashboard with authentication.

---

## 🚀 Live Demo

- 🌐 Frontend: https://she-can-foundation-1.netlify.app/ 
- 🖥️ Backend: https://she-can-foundation-1-38gf.onrender.com/

---

## 📌 Project Features

### 🎨 Frontend Features
- Responsive modern UI design
- Glassmorphism and gradient effects
- Dark / Light mode toggle
- Form validation (name, email, message)
- Animated success message below button
- Toast notifications
- Loading button state
- No page reload issue (SPA-like behavior)

---

### ⚙️ Backend Features
- Node.js + Express server
- REST API for form submission
- Stores messages in JSON file (no MongoDB)
- Fetch all messages via admin API
- Timestamp for each submission
- CORS enabled for frontend connection

---

### 🔐 Admin Panel
- Simple login authentication (localStorage based)
- Protected dashboard access
- View all submitted messages
- Logout functionality
- Clean responsive table UI

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla JS)

**Backend:**
- Node.js
- Express.js
- File System (JSON storage)

**Deployment:**
- Netlify (Frontend)
- Render (Backend)
- GitHub (Version Control)

---

## 📂 Project Structure

```text
she-can-foundation/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── admin.html
│   ├── admin.css
│   ├── admin.js
│   ├── login.html
│   ├── login.css
│   └── login.js
│
├── backend/
│   ├── server.js
│   ├── data.json
│   └── package.json
│
└── README.md

---

## 📡 API Endpoints

### Submit Contact Form

---

POST /api/contact

### Get Messages (Admin Panel)

---

⚙️ How to Run Locally

###1. Clone Repository
https://github.com/mayurnikhare/she-can-foundation

###2. Backend Setup
cd backend
npm install
node server.js


### 3. Frontend Setup
Open `index.html` in browser

---

## 🌐 Deployment Guide

### Frontend (Netlify)
- Drag & drop frontend folder
- Set publish directory: `.`

### Backend (Render)
- Connect GitHub repository
- Set root directory: `backend`
- Start command: `node server.js`

---

## ✨ Future Improvements

- MongoDB database integration
- JWT authentication for admin
- Email notification system (without Gmail)
- Real-time admin dashboard updates
- Analytics for form submissions

---

## 👨‍💻 Author

**Mayur Nikhare**

- GitHub: https://github.com/mayurnikhare 
- Project: She Can Foundation Internship Task  

---

## 📄 License

This project is open-source and free to use for learning and internship purposes.
