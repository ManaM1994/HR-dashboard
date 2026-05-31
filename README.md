# HR Dashboard 🚀

A polished Human Resources dashboard built with modern React and Next.js technologies. This app lets HR teams securely log in, browse employee records, search and paginate through users, and explore live analytics for age distribution and top cities.

---

## ✨ App Overview

`HR Dashboard` is a responsive admin-style interface designed for employee data visibility.
It includes a secure login flow, a searchable employee directory, pagination, theme switching, and interactive analytics charts.

---

## ✅ Key Features

- **Secure login page** with validation using `react-hook-form` and `yup`
- **User table** displaying employee details such as name, email, age, and role
- **Live search** by name or email for fast filtering
- **Pagination** with page controls for large user datasets
- **Analytics cards** showing age distribution and top cities using `recharts`
- **Dark / Light theme toggle** with persisted preference in `localStorage`
- **Redux Toolkit state management** for auth, users, and theme state
- **API integration** with `axios` to fetch user data from an external endpoint
- **Modern styling** using Tailwind CSS and custom component design

---

## 🧰 Tech Stack

- `Next.js` 16 (App Router)
- `React` 19
- `TypeScript`
- `Redux Toolkit`
- `react-hook-form`
- `yup`
- `axios`
- `recharts`
- `Tailwind CSS` v4

---

## 🚀 Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

- `app/` - Next.js app directory
- `app/login/` - login page and validation schema
- `app/dashboard/` - dashboard page, user table, analytics components, API client
- `app/store/` - Redux store and slices for auth, users, and theme
- `app/components/` - shared UI components like buttons, cards, inputs, and theme toggle

---

## 💡 Notes

- The home route redirects automatically to the login page.
- User authentication is validated against fetched employee data.
- Theme preference is saved in browser storage for a consistent experience.

