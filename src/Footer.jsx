import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {currentYear} Abdelrahman Mohammed. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
