# 💖 ShareHope — A Crowdfunding Platform for Meaningful Causes

## 🌐 Website Name: ShareHope

## 🔗 Live URL: https://share-hope.vercel.app

---

## 🎯 Project Purpose

**ShareHope** is a community-driven crowdfunding platform built with **Next.js**, where users can create campaigns to raise funds for causes they care about — from helping individuals in need to supporting community projects.  
It allows users to both **start a campaign** and **donate** securely using Stripe payment integration.

---

## 🚀 Key Features

### 👥 (Main Focus)

- Users can **create new campaigns** with title, description, and target amount.
- Users can **donate** to any campaign securely via **Stripe**.
- Each campaign dynamically updates with **donation progress** and total funds raised.
- Includes a **personalized Dashboard** where users can:
  - View total campaigns created
  - Track total donations made
  - See total funds raised across all campaigns
  - Analyze **Monthly Donations** through an interactive **Line Chart (Recharts)** visualization for better fundraising insights

---

## 🧱 Tech Stack

### ⚙️ Core Technologies

- **Next.js (v15)** – Full-stack React framework
- **React (v19)** – Frontend UI library
- **MongoDB** – Database for storing users, campaigns, and donations
- **Stripe** – Secure online payment integration
- **NextAuth** – Authentication and session management

### 🎨 Styling and Animations

- **Tailwind CSS (v4)** – Utility-first CSS framework
- **DaisyUI (v5)** – Tailwind CSS component library
- **Framer Motion** – Smooth animations and transitions
- **AOS** – Scroll-based animations

### 💬 Utilities and Tools

- **SweetAlert2** – Interactive alerts and confirmation modals
- **React Hot Toast** – Toast notifications
- **Recharts** – Data visualization for donation stats
- **React Icons** – Icon library
- **bcrypt** – Password hashing for security
- **date-fns** – Date formatting utility

---

## ⚡ Getting Started (Local Setup)

Follow these steps to run **ShareHope** locally on your machine:

1. **Clone the Repository**

```bash
   git clone https://github.com/swarnacse19/share-hope-next.git
```

2.  **Navigate to the project directory:**

    ```bash
    cd sharehope
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Create a `.env` file:**
    In the project root, create a file named `.env.` local and add your environment variables:
    ```env
    NEXTAUTH_SECRET=your_secret_key
    MONGODB_URI=your_mongodb_connection_string
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_PUBLIC_KEY=your_stripe_public_key
    NEXTAUTH_URL=http://localhost:3000
    ```

5.  **Run the project:**
    Start the development server with this command:
    ```bash
    npm run dev
    ```
The project will now be live at `http://localhost:3000`.

