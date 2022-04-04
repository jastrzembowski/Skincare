import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul>
        <li><a href="https://www.facebook.com/natalialuzakpermanentmakeup"> <FaFacebookF />
        </a></li>
        <li><a href="https://www.instagram.com/skincarenatalialuzak/?hl=en"><FaInstagramSquare /></a></li>
        </ul>
      </div>
      <p>Natalia Luzak SkinCare</p>
    </div>
  );
}
