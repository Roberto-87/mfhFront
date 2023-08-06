"use client";
import * as React from "react";
import AdminNavigation from "../components/AdminNavigation";
require("dotenv").config();

export default function Admin({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Maria Ferrari Hardoy- Artista Visual</title>
      </head>
      <body>
        <div>
          <AdminNavigation />
        </div>
        {children}
      </body>
    </html>
  );
}
