"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="lg:flex right-0 fixed flex-col h-[100vh] w-1/12 p-2 lg:justify-between hidden border border-l-black">
        <div className="flex justify-end">
          <Link href="/" className="text-xl">
            JAD
          </Link>
        </div>

        <div className="flex flex-col text-2xl mb-10">
          <Link href="/about" className="hover:text-[#ec4e39] flex justify-end">
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#ec4e39] flex justify-end"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#ec4e39] flex justify-end"
          >
            Contact
          </Link>
        </div>
        <footer className="flex-col w-full text-xs fixed bottom-0 right-0 p-2">
          <small className="flex justify-end">@2023 JAD 👾 </small>
          <small className="flex justify-end">ALL RIGHTS RESERVED</small>
        </footer>
      </div>
      {/* Mobile navigation */}
      <div className="lg:hidden flex flex-row fixed top-0 justify-between w-full h-20 p-5 bg-white border border-b-black z-10">
        <Link
          href="/"
          className="pt-3"
          onClick={() => {
            setToggleDropdown(false);
          }}
        >
          JAD
        </Link>
        <button
          onClick={() => {
            setToggleDropdown((prev) => !prev);
          }}
        >
          <h1 className="pt-3">MENU</h1>
        </button>
      </div>
      {toggleDropdown && (
        <div className="h-[70vh] w-[100vw] bg-white top-20 absolute flex flex-col space-y-2 justify-center rounded-b-xl drop-shadow-lg z-10 ">
          <div className="w-full h-full flex flex-col gap-4 pt-4 items-center text-xl">
            <Link
              href="/about"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <span>About</span>
            </Link>
            <Link
              href="/projects"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <span>Projects</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                setToggleDropdown(false);
              }}
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
