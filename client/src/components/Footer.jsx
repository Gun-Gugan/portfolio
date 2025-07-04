import React from "react";

const Footer = () => (
  <React.Fragment>
    <footer className="mt-16 text-center">
      <p className="text-gray-500 mt-4">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  </React.Fragment>
);

export default Footer;
