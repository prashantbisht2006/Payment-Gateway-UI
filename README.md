# 💳 Payment Gateway UI

A modern, responsive payment gateway interface built with [Next.js](https://nextjs.org/) and TypeScript. This project demonstrates a clean UI design and leverages best practices in modern frontend development.

---

## 🚀 Features

- **Next.js 14** with App Router  
- **TypeScript** for type safety  
- **Tailwind CSS** for utility-first styling  
- **Geist font** integration via `next/font`  
- **Modular components** for scalability  
- **Live deployment:** [payment-gateway-ui-six.vercel.app](https://payment-gateway-ui-six.vercel.app)

---

## 🛠️ Getting Started

### 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm**, **yarn**, **pnpm**, or **bun**

## 📁 Project Structure

```plaintext
.
├── .gitignore
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components.json
├── components
│   ├── CardPayment.tsx
│   ├── CheckoutScreen.tsx
│   ├── NetBanking.tsx
│   ├── PaymentApp.tsx
│   ├── PaymentScreen.tsx
│   ├── ThemeSwitcher.tsx
│   ├── UpiPayment.tsx
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── switch.tsx
├── eslint.config.mjs
├── lib
│   └── utils.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── tsconfig.json
