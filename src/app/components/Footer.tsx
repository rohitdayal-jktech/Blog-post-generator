"use client";

import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "../contexts/ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`pt-10 transition-colors duration-300 ${
        darkMode
          ? "bg-black text-white dark:border-t dark:border-gray-600"
          : "bg-[rgb(229,70,118)] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">BlogLab</h2>
          <p className="text-sm text-gray-100 dark:text-gray-300">
            Smart AI writing for instant, quality blog posts — fast, flexible,
            and ready to publish.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-100 dark:text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-white">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon className="hover:text-gray-300" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <TwitterIcon className="hover:text-gray-300" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="hover:text-gray-300" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon className="hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`text-center text-sm py-4 ${
          darkMode
            ? "bg-gray-900 text-gray-300"
            : "bg-[rgb(186,55,94)] text-gray-100"
        }`}
      >
        © {new Date().getFullYear()} BlogLab. All rights reserved.
      </div>
    </footer>
  );
}
