import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import Image from 'next/image';
import { useState } from "react";
import menu from '@/public/assets/menu.svg';

const Navbar = () => {
  const [mobileNav, setMoileNav] = useState(false)
  return (
    <nav className='w-full flex p-10 justify-between items-center left-0 top-0'>
    <div className={`fixed md:hidden left-0 top-0 w-[100vw] h-[100vh] bg-primary z-20 text-white ${mobileNav ? 'block' : 'hidden'}`}>
      <div className='mt-4 p-10 flex items-end justify-end' onClick={()=> setMoileNav(!mobileNav)}>
        <FaXmark className='text-2xl'/>
      </div>
      <ul className='w-full flex items-center flex-col gap-7 font-bold text-xl'>
        <Link href='/about-us' onClick={()=> setMoileNav(!mobileNav)}><li>About Us</li></Link>
        <Link href='#' onClick={()=> setMoileNav(!mobileNav)}><li>FAQs</li></Link>
        <Link href='#' onClick={()=> setMoileNav(!mobileNav)}><li>Services</li></Link>
        <Link href='contact' onClick={()=> setMoileNav(!mobileNav)}><li>Contact</li></Link>
      </ul>
    </div>
    <Link href='/'><h1 className='text-xl font-bold'>MentalPaddi</h1></Link>                                                                             
    <div className='w-[80%]'>
      <div className='w-full'>   
        <div className='flex justify-end' onClick={()=> setMoileNav(!mobileNav)}>       
          <Image src={menu} alt='menu' className='md:hidden' width={20} height={20} />
        </div>
        <ul className='md:flex gap-[10%] flex-row items-center justify-end hidden'>
          <li><Link href='/about-us'>About Us</Link> </li>
          <li><Link href='#'>FAQs</Link> </li>
          <li><Link href='#'>Services</Link> </li>
          <li><Link href='/contact'>Contact</Link> </li>
          <li className='bg-slate-900/50 w-[6em] h-[2.5em] flex items-center cursor-pointer justify-center text-white font-medium rounded-lg'><Link href='/sign-in'>Sign In</Link> </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;    
