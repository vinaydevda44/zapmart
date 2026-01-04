# Zapmart 🚚🛒

Zapmart is a real-time delivery web application currently under development.
It is designed to connect users, admins, and delivery partners in a single
platform for ordering and delivering grocery products efficiently.

---

## Status
🚧 **Work in Progress**  
This project is actively being developed and currently runs on a local machine.

---

## Project Overview

Zapmart allows users to browse products and place orders.
Admins manage products and orders, and delivery partners will handle deliveries
based on order status updates in real time.

---

## User Roles

- User (Customer)
- Admin
- Delivery Partner

---

## Current Features (Implemented / In Progress)

### User
- Browse listed grocery products
- Place orders
- Payment options:
  - Cash on Delivery
  - Online payment using Stripe

### Admin
- Add and manage grocery products
- View all orders
- Update and manage order status

### Delivery Partner
- 🚧 Under development
- Planned features:
  - Accept or reject delivery requests
  - Deliver orders
  - View income and delivery dashboard

---

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Redux
- Leaflet (for map & location handling)

### Backend
- Next.js API routes
- MongoDB

### Authentication
- Auth.js (NextAuth)  
  - Google and other provider sign-in/sign-out

### Other Tools & Services
- Stripe (online payments)
- Cloudinary (image storage)

---

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
