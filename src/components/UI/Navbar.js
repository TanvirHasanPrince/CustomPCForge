import Head from "next/head";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/processors">CPU / Processor</Link>
              </li>
              <li>
                <a>Motherboard</a>
              </li>
              <li>
                <a>RAM</a>
              </li>
              <li>
                <a>Power Supply Unit</a>
              </li>
              <li>
                <a>Storage Device</a>
              </li>
              <li>
                <a>Monitor</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Others</summary>
                  <ul className="p-2">
                    <li>
                      <a>Mouse</a>
                    </li>
                    <li>
                      <a>Keyboard</a>
                    </li>
                    <li>
                      <a>Spearks</a>
                    </li>
                    <li>
                      <a>UPS</a>
                    </li>
                    <li>
                      <a>Router</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            CustomPCForge
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/processors">CPU / Processor</Link>
            </li>
            <li>
              <Link href="/motherboards">Motherboard</Link>
            </li>
            <li>
              <Link href='/ram'>RAM</Link>
            </li>
            <li>
              <a>Power Supply Unit</a>
            </li>
            <li>
              <a>Storage Device</a>
            </li>
            <li>
              <a>Monitor</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Others</summary>
                <ul className="p-2">
                  <li>
                    <a>Mouse</a>
                  </li>
                  <li>
                    <a>Keyboard</a>
                  </li>
                  <li>
                    <a>Spearks</a>
                  </li>
                  <li>
                    <a>UPS</a>
                  </li>
                  <li>
                    <a>Router</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-accent">PC Builder</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
