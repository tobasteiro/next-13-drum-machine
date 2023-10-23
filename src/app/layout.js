"use client";

import React from "react";

import Header from "../components/Header";

import "./styles.css";

export const MuteContext = React.createContext();

function RootLayout({ children }) {
  const [muted, setMuted] = React.useState(false);

  return (
    <MuteContext.Provider value={{ muted, setMuted }}>
      <html lang="en">
        <body>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </body>
      </html>
    </MuteContext.Provider>
  );
}

export default RootLayout;
