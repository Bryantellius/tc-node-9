import React from "react";
import Footer from "./footer.component";
import Navbar from "./nav.component";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
