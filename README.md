Zapmart 🚚🛒

Zapmart is a real-time grocery delivery web application that connects customers, admins, and delivery partners on a single platform for smooth ordering and delivery management.

The application focuses on real-time order updates, secure payments, and role-based dashboards.

🌐 Live Demo

🔗 Deployed on Vercel:
https://zapmart-one.vercel.app/

📌 Project Overview

Users can browse grocery products and place orders online

Admins manage products and orders through a centralized dashboard

Delivery partners handle deliveries with real-time updates powered by Socket.IO

👥 User Roles

User (Customer)

Admin

Delivery Partner

🚀 Features
👤 User (Customer)

Browse grocery products

Place orders

View order status in real time

Payment options:

Cash on Delivery (COD)

Online payment using Stripe

🛠️ Admin

Add, update, and delete grocery products

View all customer orders

Update order status

Real-time order updates using Socket.IO

Admin Dashboard:

View total orders

Track total income

Monitor order and payment status

🚚 Delivery Partner

Accept or reject delivery requests

View assigned orders

Update delivery status in real time

Delivery dashboard

Income tracking

⚡ Real-Time Functionality

Zapmart uses Socket.IO to enable:

Instant order status updates

Live admin dashboard updates

Real-time delivery partner notifications

🧑‍💻 Tech Stack
Frontend

Next.js

TypeScript

Tailwind CSS

Redux

Framer Motion

Leaflet (Maps & location handling)

Backend

Next.js API Routes

MongoDB

Authentication

Auth.js (NextAuth)

Google sign-in and sign-out

Other Tools & Services

Stripe (Online payments)

Cloudinary (Image storage)

Socket.IO (Real-time communication)

## Installation & Setup (Local)

git clone https://github.com/vinaydevda44/zapmart.git
cd zapmart

npm install
npm run dev

## Environment Variables

MONGODB_URL=DATABASE_URL
AUTH_SECRET=YOUR_AUTH_SECRET
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
NEXT_BASE_URL=BASE_URL
STRIPE_WEBHOOK_SECRET=YOUR_STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_SOCKET_SERVER=SOCKET_SERVER_URL

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

EMAIL=YOUR_EMAIL
PASSWORD=YOUR_APP_PASSWORD_OF_GOOGLE
