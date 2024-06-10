"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/create-pokemon">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/fire">
                  Fire
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/water" className="nav-link">
                  Water
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/grass" className="nav-link">
                  Grass
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
