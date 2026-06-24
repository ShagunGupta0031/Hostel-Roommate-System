# 🏠 Hostel Roommate Finder App
### VIT Bhopal — Hostel Management System

Ek full-stack web application jo hostel students ko unke preferences ke basis par perfect roommate dhundhne mein help karta hai.

---

## 📁 Project Structure

```
hostel-roommate-app/
├── backend/                        # Node.js + Express server
│   ├── controllers/
│   │   └── authController.js       # Signup & Login logic
│   ├── models/
│   │   └── User.js                 # MongoDB User schema
│   ├── routes/
│   │   ├── authRoutes.js           # /api/auth routes
│   │   ├── preferenceRoutes.js     # /api/preferences routes
│   │   └── wardenRoutes.js         # /api/warden routes
│   ├── .env.example                # Environment variables template
│   ├── package.json
│   └── server.js                   # Express app entry point
│
├── frontend/                       # Vanilla HTML/CSS/JS (Firebase)
│   ├── index.html                  # Main UI (single-page app)
│   ├── style.css                   # Global styles
│   ├── app.js                      # Frontend logic (Firebase auth)
│   └── firebase-config.js          # Firebase initialization
│
├── .gitignore
└── README.md
```

---

## ⚙️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | HTML, CSS, Vanilla JavaScript     |
| Auth       | Firebase Authentication           |
| Database   | Firebase Firestore + MongoDB Atlas|
| Backend    | Node.js, Express.js               |
| ORM        | Mongoose                          |
| Auth Token | JWT (JSON Web Token)              |
| Password   | bcryptjs                          |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Firebase project

---

### 1️⃣ Backend Setup

```bash
# Backend folder mein jao
cd backend

# Dependencies install karo
npm install

# .env file banao
cp .env.example .env
```

Ab `.env` file open karo aur apni values fill karo:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/hostelapp
JWT_SECRET=koi_bhi_secret_string_likhdo
PORT=5000
```

```bash
# Server start karo (development mode)
npx nodemon server.js

# Ya normal start
node server.js
```

Server `http://localhost:5000` par chalega.

---

### 2️⃣ Frontend Setup

Frontend ko kisi server ki zarurat nahi — directly browser mein kholo.

**VS Code Live Server se (Recommended):**
1. VS Code mein `frontend/index.html` open karo
2. Right-click → **Open with Live Server**
3. Browser mein `http://127.0.0.1:5500/frontend/index.html` open hoga

**Ya simply:**
```
frontend/index.html ko browser mein directly open karo
```

---

### 3️⃣ Firebase Setup

`frontend/firebase-config.js` mein apna Firebase project ka config daalo:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

Firebase Console → Project Settings → Your Apps mein ye config milega.

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000`

### Auth Routes (`/api/auth`)

| Method | Endpoint           | Description        | Body                                    |
|--------|--------------------|--------------------|-----------------------------------------|
| POST   | `/api/auth/signup` | Naya user register | `name, email, password, regno, gender, year, branch, state, city` |
| POST   | `/api/auth/login`  | Login karo         | `email, password`                       |

**Signup Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "...",
    "name": "Rahul Sharma",
    "email": "rahul@viit.ac.in"
  }
}
```

### Preference Routes (`/api/preferences`)
> 🚧 Coming Soon — Roommate preference matching logic yahan aayegi

### Warden Routes (`/api/warden`)
> 🚧 Coming Soon — Warden dashboard ke liye admin routes

---

## 👤 User Schema

```js
{
  name: String,
  email: String (unique),
  password: String (hashed),
  regno: String,           // Registration number
  gender: String,
  year: String,            // 1st, 2nd, 3rd, 4th year
  branch: String,          // CSE, ECE, etc.
  phone: String,
  state: String,
  city: String,
  college: String,
  sleep: String,           // Sleep habits
  study: String,           // Study time preference
  noise: String,           // Noise tolerance
  religious: String,       // Religious preference
  habits: [String],        // Array of habits
  photoUrl: String         // Profile photo URL
}
```

---

## 🔐 Security Notes

- `.env` file kabhi bhi GitHub par push mat karo
- Production mein strong `JWT_SECRET` use karo
- Firebase API keys ko Firebase Security Rules se secure karo

---

## 📸 Features

- ✅ Student Signup / Login (JWT + bcrypt)
- ✅ Dark Mode / Light Mode toggle
- ✅ Roommate preference form
- ✅ Firebase Firestore integration
- 🚧 Roommate matching algorithm (coming soon)
- 🚧 Warden dashboard (coming soon)
- 🚧 Chat between matched roommates (coming soon)

---

## 🐛 Common Issues

**CORS Error aaye toh:**
Backend `server.js` mein apna frontend URL add karo:
```js
origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
```

**MongoDB connect na ho:**
- Check karo `MONGO_URI` sahi hai `.env` mein
- MongoDB Atlas mein IP address whitelist karo (0.0.0.0/0 for dev)

---

## 🤝 Contributing

1. Fork karo
2. Feature branch banao (`git checkout -b feature/roommate-matching`)
3. Commit karo (`git commit -m 'Add roommate matching'`)
4. Push karo (`git push origin feature/roommate-matching`)
5. Pull Request open karo

---

Made with ❤️ for VIT Bhopal Hostel Students
