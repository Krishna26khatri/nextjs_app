"use client"
import React,{useState} from 'react'
import Link from 'next/link';
import './style.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
    <div>
    <nav className="flex space-x-6 h-28 justify-between text-black-200 items-center font-bold font-mono bg-orange-100 px-14">
    <span className="logo text-blue-900 ">blogs.</span>
     {/* Hamburger icon */}
     <button
        className="sm:hidden p-2 text-black-500 focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? '✖️' : '☰'}
      </button>
      <ul className={`flex-col sm:flex sm:flex-row sm:space-x-6  sm:block hidden sm:items-center`}>
                    <li className=" text-black-500 hover:text-zinc-500"> <button>
                <Link href="/">HOME</Link>
            </button></li>
                    <li className=" text-black-500 hover:text-zinc-500 cursor-pointer"> <button>
                <Link href="votingpage">BLOGS</Link>
            </button></li>
                    <li className=" text-black-500 hover:text-zinc-500 cursor-pointer"> <button>
                <Link href="register">CATEGORIES</Link>
            </button></li>
                    <li className=" text-black-500 hover:text-zinc-500 cursor-pointer"> <button>
                <Link href="profile">CONTACT</Link>
            </button></li>
                    <li className=" text-black-500 hover:text-zinc-500 cursor-pointer"> <button>
                <Link href="login">LOGIN</Link>
            </button></li>
                    
                </ul>
                
                 {/* For small screens, show the navbar items below the logo */}
      {isOpen && (
        <div className="flex  mt-2 sm:hidden">
          <ul className="flex flex-col space-y-2">
            <li className="text-black-500 hover:text-zinc-500">
              <Link href="/" >
                HOME
              </Link>
            </li>
            <li className="text-black-500 hover:text-zinc-500">
              <Link href="/votingpage" >
                VOTE
              </Link>
            </li>
            <li className="text-black-500 hover:text-zinc-500">
              <Link href="/register" >
                REGISTER
              </Link>
            </li>
            <li className="text-black-500 hover:text-zinc-500">
              <Link href="/profile" >
                PROFILE
              </Link>
            </li>
            <li className="text-black-500 hover:text-zinc-500">
              <Link href="/login" >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      )}
            </nav>
    </div>
    </>
  );
}
