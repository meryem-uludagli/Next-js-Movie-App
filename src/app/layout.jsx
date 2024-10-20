import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import React from "react";
import "./globals.css";
import Providers from "./Providers";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default layout;
