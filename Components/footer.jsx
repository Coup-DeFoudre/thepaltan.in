import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="socials-desktop lg:hidden bottom-0 left-0 right-0 p-5 flex justify-center items-center">
      <h4 className="mr-3">Follow us at :</h4>
      <div className="flex gap-3">
        <Link
          href="https://www.facebook.com/share/ABUsMtg4erWFAP2y/?mibextid=qi2Omg"
          target="_blank"
        >
          {" "}
          <FaFacebook />{" "}
        </Link>
        <Link href="https://www.instagram.com/thepaltan.in/" target="_blank">
          {" "}
          <FaInstagram />
        </Link>

        <FaTwitter />
      </div>
    </div>
  );
};

export default Footer;
