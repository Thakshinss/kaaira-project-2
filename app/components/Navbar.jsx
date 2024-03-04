"use client" 

import { AlignJustify, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLink = [
  {
    id:5,
    name:"Home",
    path:"/homee"
  },
  // {
  //   id:1,
  //   name:"Home",
  //   path:"/home"
  // },
  {
    id:2,
    name:"Courses",
    path:"/courses"
  },
  {
    id:3,
    name:"About Us",
    path:"/about"
  },
  {
    id:4,
    name:"Contact us",
    path:"/contact"
  },

  

]

const Navbar = () => {
  const pathname = usePathname()
  return (

    <nav className='' >
      <div className='hidden md:flex justify-between px-10 py-2 text-white bg-blue-600'>
        <h1>Mon - Sat : 11AM IST - 7PM IST</h1>
        <h1>Call: +91-7092774077</h1>
        <h1>Email: Support@kairaaacademy.com</h1>
      </div>
      <div className='flex items-center justify-between px-4 py-2 bg-slate-50'>
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Next.js Logo"
          width={150}
          height={150}
          priority
        />
      <ul className='flex-col justify-between hidden w-2/4 md:flex md:flex-row '>
        {
          navLink.map((link)=>(
              <Link className={`${pathname === link.path ? 'active' : ''}`} href={link.path} key={link.id}>{link.name}</Link>
          ))
        }
      </ul>
      <ul className='md:hidden'>
        <Menu />
      </ul>

      </div>
      
    </nav>
    
  )
}

export default Navbar
