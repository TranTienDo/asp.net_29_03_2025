import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./layouts/Menu";
import Topbar from "./layouts/Topbar";
import Footer from "./layouts/Footer";

function Admin() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light" style={styles.container}>
      <Topbar />

      <div className="d-flex flex-grow-1">
        <Menu />

        <main className="flex-grow-1 p-4" style={styles.main}>
          <div className="bg-white rounded shadow-sm p-4" style={styles.content}>
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />

      <style>{styles.keyframes}</style>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    animation: "fadeIn 0.4s ease-in-out",
  },
  main: {
    backgroundColor: "#f1f5f9",
    transition: "all 0.3s ease",
  },
  content: {
    minHeight: "80vh",
    animation: "fadeIn 0.4s ease-in-out",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  keyframes: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
};

export default Admin;
