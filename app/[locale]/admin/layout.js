"use client";
import * as React from "react";
import AdminNavigation from "../components/AdminNavigation/AdminNavigation";
require("dotenv").config();
import SessionProviders from "../../sessionProvider";

export default function Admin({ children }) {
  return (
    <html lang="en">
    <body>
      <section>
        <AdminNavigation/>
      {children}
      </section>
      </body>
  </html>
  );
}

{/* <section>
{children}
</section> */}