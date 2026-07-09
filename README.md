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

  ## Home page

  ![enter image description here](https://1drv.ms/i/c/5fbc107da0220c28/IQBc2-qAXcQqR5kSHR-0H5csAZD3POm2VCpElP64_Gapbio?e=Bxt1uU)

  ---

  ## Product Page
  ![enter image description here](https://1drv.ms/i/c/5fbc107da0220c28/IQAPZwZ5sosSTrhtF5mLH8VcAYiyyBstcUR5ZZuTuGCW1r0?e=21V10e)

    ---
  ## Checkout page 

  ![enter image description here](https://1drv.ms/i/c/5fbc107da0220c28/IQA8eDNa8AkjRK4zq0ECXkEpAe7fA6B-V0-Y67qk7KW8d08?e=jBwsdC)

  ---

## Admin Panel Page

![enter image description here](https://1drv.ms/i/c/5fbc107da0220c28/IQAqkA6eoMvdQbBgf5NuSMXgAeiqJQ0YP3CJM2HEHzVXm6k?e=m4N4gC)

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
