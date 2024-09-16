import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar.tsx";

// // Define the type for props (if any)
// interface IProps {
//   // Define your prop types here
// }

// Functional component using TypeScript
const RootLayout: React.FC =
  // <IProps>
  () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

export default RootLayout;
