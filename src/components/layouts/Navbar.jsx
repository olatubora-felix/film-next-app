import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <nav className="flex flex-wrap justify-between items-center w-full py-4 md:py-0 px-4  text-lg text-gray-700 bg-white container mx-auto">
        <div>
          <Link href={'/'} passHref>
            FilmTech
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0 space-x-2"
          >
            <li>
              <Link
                href="/"
                className="md:p-2 py-2 block hover:text-purple-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/films"
                className="md:p-2 py-2 block hover:text-purple-400"
              >
                Films
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
