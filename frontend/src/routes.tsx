// src/routes.tsx
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout"; // Your layout component

// Lazy loading components
const HomePage = lazy(() => import("./pages/home/HomePage.tsx"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Main layout
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
