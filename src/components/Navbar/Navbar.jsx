import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navLinks = [
    { id: 1, path: '/home', name: 'Home' },
    { id: 2, path: '/shop', name: 'Shop' },
    { id: 3, path: '/review', name: 'Review' },
    { id: 4, path: '/about', name: 'About' },
    { id: 5, path: '/contact', name: 'Contact' },
  ];
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#2b2b2b] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/home"
              className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Navbar
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              click
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center w-full md:w-auto">
              {navLinks.map((link) => (
                <li className="nav-item text-xl text-white md:ml-4">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
