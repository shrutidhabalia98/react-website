import React from "react";
import { NavLink } from "react-router-dom";

let Footer = () => {
  return (
    <>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <NavLink to="https://lifestyle.com/"> lifestyle.com</NavLink>
        </div>
      </footer>
    </>
  );
};
export default Footer;
