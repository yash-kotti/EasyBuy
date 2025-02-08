# 🛍️ EasyBuy

A modern full-stack e-commerce platform built with React and Node.js.

---

### 🔗 Demo
[Live Demo](https://easy-buy-now.vercel.app)

---

## ⚡ Tech Stack

### Frontend

- **React with Vite**: Lightning-fast development environment.
- **Redux Toolkit**: Simplified state management.
- **Axios**: Seamless API integration.
- **Modern JavaScript (ES6+)**: Cutting-edge language features.

### Backend

- **Node.js**: Scalable server-side JavaScript.
- **Express.js**: Minimalist web framework.
- **MongoDB with Mongoose**: Flexible NoSQL database and schema management.
- **RESTful API architecture**: Clean and structured API design.

---

## 📂 Project Structure

```plaintext
EasyBuy/
├── Client/              # React frontend
│   ├── src/
│   │   ├── Store/       # Redux store
│   │   ├── components/  # React components
│   │   ├── pages/       # Page-level components
│   │   ├── assets/      # Static files (images, styles, etc.)
│   │   └── utils/       # Helper functions and utilities
├── Server/              # Node.js backend
│   ├── controllers/     # Route controllers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── config/          # Configuration files
│   └── server.js        # Backend entry point
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v20.x or later
- **MongoDB**: Installed locally or use MongoDB Atlas
- **Git**: For version control

### Backend Setup

```bash
cd Server
npm install
npm start
```

### Frontend Setup

```bash
cd Client
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Backend (.env)

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend (.env)

```bash
VITE_API_URL=http://localhost:5000/
```

---

## ✨ Features

- **Product Search and Filtering**: Quickly find desired products.
- **Category-Based Navigation**: Intuitive browsing by category.
- **Shopping Cart Functionality**: Add, update, and remove items seamlessly.
- **Responsive Design**: Optimized for desktop, tablet, and mobile.
- **Real-Time Inventory Updates**: Stay up-to-date with stock availability.
- **Dynamic Product Loading**: Fast and efficient product rendering.

---

## 🛠️ Development Workflow

1. **Fork the Repository**: Start by creating your copy of the project.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit Your Changes**:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to Your Branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**: Submit your changes for review.

---

Feel free to contribute and make EasyBuy even better! 🎉

