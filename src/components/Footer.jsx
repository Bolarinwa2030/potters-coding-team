import React from "react";
import Logo from "../assets/Potter_logo.png";

function Footer() {
  return (
    <footer className="bg-red-700 text-white py-12">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">

          <img
            src={Logo}
            alt="Potters Private School Logo"
            className="w-28"
          />

          <p className="mt-4 text-sm leading-7 text-center md:text-left">
            Empowering young minds through technology,
            creativity, and innovation. Building the next
            generation of programmers at POTTERS PRIVATE SCHOOL.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-2xl font-bold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3">

            <li className="hover:underline cursor-pointer">
              Home
            </li>

            <li className="hover:underline cursor-pointer">
              About Us
            </li>

            <li className="hover:underline cursor-pointer">
              Our Team
            </li>

            <li className="hover:underline cursor-pointer">
              Projects
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-2xl font-bold mb-5">
            Follow Us
          </h2>

          <div className="space-y-3">

            <p>
              Facebook:
              <span className="font-medium">
                {" "}@PottersPrivateSchool
              </span>
            </p>

            <p>
              Instagram:
              <span className="font-medium">
                {" "}@PottersPrivateSchool
              </span>
            </p>

            <p>
              X (Twitter):
              <span className="font-medium">
                {" "}@PottersPrivateSchool
              </span>
            </p>

            <p>
              Email:
              <span className="font-medium">
                {" "}info@potters.edu.ng
              </span>
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-red-500 mt-10 pt-6 text-center text-sm">

        © {new Date().getFullYear()} POTTERS PRIVATE SCHOOL Coding Team. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;