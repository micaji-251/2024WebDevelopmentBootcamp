import React from "react";

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
};

export default Footer;
