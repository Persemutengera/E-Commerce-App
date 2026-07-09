#  E-Commerce App

A modern full-stack E-Commerce Web Application built with the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application provides customers with a seamless online shopping experience while offering administrators a dashboard to manage products and orders. It also integrates secure payment gateways using Stripe and Razorpay.

---

## 🚀Features
-  Customer Features
-  User Registration and Login (JWT Authentication)
-  Browse Products
-  Search Products
-  Filter Products by Category
-  Product Details Page
-  Shopping Cart
-  Update Cart Quantity
-  Secure Checkout
-  Multiple Payment Methods
   -  Cash on Delivery (COD)
   -  Stripe
   -  Razorpay
-  Order History
-  Track Order Status
-  Responsive Design

  ---
  
##  Admin Feature
-  Secure Admin Login
-  Add New Products
-  Upload Product Images (Cloudinary)
-  View All Products
-  Remove Products
-  View Customer Orders
-  Update Order Status
-  Manage Inventory

  ---
#  🛠️Technologies Used

##  Frontend
-  React.js
-  React Router DOM
-  Axios
-  Tailwind CSS
-  React Toastify

##  Backend
-  Node.js
-  Express.js
-  MongoDB
-  Mongoose
-  JWT Authentication
-  bcrypt
-  Cloudinary
-  Multer
-  Stripe API
-  Razorpay API

---
##  📁 Project Structure
E-Commerce-App/
│
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

---

#  ⚙️ Installation

#@  Clone the repository

  ```bash
  git clone https://github.com/yourusername/e-commerce-app.git
  ```

  ```bash
  cd e-commerce-app
  ```

---

#  Install dependencies

##  Backend

 ```bash
cd backend
npm install
```

##  Frontend

 ```bash
cd frontend
npm install
```
##  Admin

 ```bash
cd admin
npm install
```

---

#  Environment Variables
##  Backend (.env)
```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret_key

STRIPE_SECRET_KEY=your_stripe_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

---

##  Frontend (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

##  Admin (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---
#  Running the Application
##  Start Backend

```bash
cd backend
npm run server
```

or
```bash
npm start
```

---

##  Start Frontend

```bash
cd frontend
npm run dev
```

---

##  Start Admin Panel

```bash
cd admin
npm run dev
```
---

#  API Endpoints
##User
Method	Endpoint	Description
---
POST	/api/user/register	Register User
---
POST	/api/user/login	Login User
---
POST	/api/user/admin	Admin Login

---

#  Products
Method	Endpoint	Description
---
GET	/api/product/list	Get Products
---
POST	/api/product/add	Add Product
---
POST	/api/product/remove	Remove Product
---
POST	/api/product/single	Get Product

#  Cart
Method	Endpoint	Description
---
POST	/api/cart/add	Add to Cart
---
POST	/api/cart/update	Update Cart
---
POST	/api/cart/get	Get User Cart

---

#  Orders

Method	Endpoint	Description
---
POST	/api/order/place	Cash on Delivery
---
POST	/api/order/stripe	Stripe Checkout
---
POST	/api/order/razorpay	Razorpay Checkout
---
POST	/api/order/userorders	User Orders
---
POST	/api/order/list	Admin Orders
---
POST	/api/order/status	Update Order Status

---

#  Authentication

The application uses JSON Web Tokens (JWT) for authentication.

-  User logs in
-  Server generates JWT
-  Token is stored on the client
-  Token is sent with each protected request
-  Middleware verifies the token before granting access

  ---
  
#  Payment Integration
##  Stripe
-  Secure Checkout
-  Test Mode Support
-  Checkout Sessions
-  Payment Verification
  
 ##  Razorpay
-  Test Mode Support
-  OTP Verification
-  Payment Verification
-  Cashless Payments

  ---
  
# Image Storage

Product images are uploaded using Cloudinary.

Features include:

-  Secure image uploads
-  Image optimization
-  Cloud storage
-  Fast content delivery

  ---
  
##  Security
-  Password hashing with bcrypt
-  JWT Authentication
-  Protected API Routes
-  Environment Variables
-  Secure Payment Processing

  ---
  
##  Future Improvements
-  Product Reviews
-  Wishlist
-  Coupon System
-  Email Notifications
-  Inventory Management
-  Search Suggestions
-  Product Ratings
-  User Profiles
-  Multi-language Support
-  Dark Mode
-  Analytics Dashboard

  ---

  ##  Screenshots

  ## 🏠 Home page

  ![Home Page]<img width="1901" height="882" alt="Screenshot 2026-07-09 121202" src="https://github.com/user-attachments/assets/09e6440c-43d4-4cf8-8c29-b1f569b3d0df" />


  ---

  ## 🛍️Product Page

  ![Product Page]<img width="1908" height="907" alt="Screenshot 2026-07-09 121519" src="https://github.com/user-attachments/assets/cb7bd36e-9d6f-477a-bee4-ad7d30172de8" />


    ---
  ## 💳 Checkout page 

  ![Checkout Page]<img width="1902" height="900" alt="Screenshot 2026-07-09 121644" src="https://github.com/user-attachments/assets/9dc39671-f173-42f2-9be2-f62506f62971" />


  ---

## ⚙️ Admin Panel Page

![Admin Panel]<img width="1887" height="882" alt="Screenshot 2026-07-09 122239" src="https://github.com/user-attachments/assets/01a8956f-b71b-4778-9663-d1c9411919df" />


---

##  Deployment

The application can be deployed using:

-  Frontend: Vercel or Netlify
-  Backend: Vercel, Render, or Railway
-  Database: MongoDB Atlas
-  Image Storage: Cloudinary

---

##  Author

Perseverance Mutengera

-  Bachelor of Science in Computing Graduate
-  ALX Software Engineering Alumni
-  Full Stack Developer

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

Special thanks to the open-source community and the creators of the technologies used in this project:

-  React
-  Node.js
-  Express.js
-  MongoDB Atlas
-  Cloudinary
-  Stripe
-  Razorpay
-  Tailwind CSS
-  Axios
-  React Toastify
