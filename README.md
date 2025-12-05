# 🏥 Medify – Medical Center Finder & Booking UI

Medify is a responsive web application that allows users to browse medical centers based on state and city, view hospital details, and book available time slots.  
Built with **React + Vite**, styled using **Material UI**, and enhanced with interactive date & time selection using **Swiper** and **date-fns**.

---

## 🚀 Features

### 🔎 Search & Filters

- Search hospitals by **state** and **city**
- Fetch real-time data from API:

### 🏥 Hospital Cards

- Clean, card-based layout for each medical center
- Displays:
- Hospital name
- City & State
- Type
- Ratings
- Free consultation indicator

### 📅 Booking Flow

- Interactive **Day Selector** (7-day sliding calendar)
- Show available **morning, afternoon, evening** slots
- Booking modal with success toaster
- Selected booking displays:
- Date (formatted using `date-fns`)
- Time slot

### 📌 UI & Experience

- Built with **Material UI (MUI)** for consistent theming
- Custom button & chip styling
- Responsive layout across mobile, tablet, desktop

### 🎠 Swiper Integration

Used for a smooth horizontal date selector:

- `slidePrev()` and `slideNext()` navigation
- Custom slide buttons
- Breakpoints for responsive slides per view

### 🧰 Technologies Used

| Technology                   | Purpose                          |
| ---------------------------- | -------------------------------- |
| **React**                    | Main UI library                  |
| **Vite**                     | Fast bundler & dev server        |
| **Material UI (MUI)**        | Styling, layout components       |
| **date-fns**                 | Date formatting & manipulation   |
| **Swiper.js**                | Sliding day selector UI          |
| **React Router DOM**         | Page routing & query params      |
| **Google Tag Manager (GTM)** | Tracking events like first visit |
| **Fetch API**                | Fetch hospital data              |

---

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/Medify.git


```

- npm install
- npm run dev
- npm run build
