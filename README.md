---

# Project README
## 📘 Next.js Application with Tailwind CSS, Zustand, ShadCN, and Context API

This project is a comprehensive web application built using modern web technologies including Next.js, Tailwind CSS, Zustand, ShadCN, and Context API. The application showcases a well-structured and responsive design, optimized for various screen sizes ranging from mobile devices to 4k screens. The implementation emphasizes readability, scalability, and maintainability.

### 👨‍💻 Developed by: Harshit Sharma

---

## 📂 Folder Structure

```
project-root
├── context
│   └── ThemeContext.tsx
├── public
│   └── (all images)
├── sections
│   ├── Clients.tsx
│   ├── Design.tsx
│   ├── Marketing.tsx
│   └── (other sections)
├── src
│   ├── app
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── (additional styles)
│   ├── components
│   │   ├── Navbar
│   │   ├── Card
│   │   ├── DarkModeToggle
│   │   └── (additional components)
│   ├── lib
│   │   └── util.ts (ShadCN configuration)
│   └── store
│       └── themeStore.ts (Zustand setup)
└── README.md

```


## 🛠 Technologies Used

- Next.js: A React framework for building server-side rendered and statically generated websites.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Zustand: A small, fast, and scalable bearbones state management solution.
- ShadCN: A set of customizable components built on Tailwind CSS.
- Context API: Used for state management, particularly for the dark mode toggle.
- react-countup: A React component used for animating numerical values.

---

## 🚀 Implemented Features

1. Dark Mode Toggle
   - Implemented using both Zustand and Context API due to version compatibility issues.
   - The toggle allows users to switch between light and dark themes seamlessly.

2. Count-Up Animation
   - Added to the section titled "Helping a local business reinvent itself" using the react-countup library.
   - Provides an engaging visual effect that highlights key metrics.

3. Responsive Design
   - Ensures the UI looks appealing across all screen sizes, from mobile (320px) to 4k resolutions.
   - The design is flexible, allowing for adjustments to ensure a good appearance on mobile devices.

4. Working Carousel
   - Implemented a carousel in the first section to enhance the user experience with smooth transitions and interactive content.

---

