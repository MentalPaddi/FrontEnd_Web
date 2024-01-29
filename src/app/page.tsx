import Image from 'next/image';
import Link from 'next/link';
import man from '@/public/assets/Mental_Health.svg';
import menu from '@/public/assets/menu.svg';

const Page = () => {
  return (
    <section className='bg-primary w-full text-white min-h-screen p-10 md:p-40 md:px-20'>
      <nav className='w-full flex p-10 justify-between items-center fixed left-0 top-0'>
        <h1 className='text-xl font-bold'>MentalPaddi</h1>                                                                                  
        <div className='w-[80%]'>
          <div className='w-full'>   
            <div className='flex justify-end'>       
              <Image src={menu} alt='menu' className='md:hidden' width={20} height={20} />
            </div>
            <ul className='md:flex gap-[10%] flex-row items-center justify-end hidden'>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li className='bg-slate-900/50 w-[6em] h-[2.5em] flex items-center cursor-pointer justify-center text-white font-medium rounded-lg'><Link href='/sign-up'>Sign Up </Link> </li>
            </ul>
          </div>
        </div>
      </nav>
        <div className='flex mt-20 md:mt-0 flex-col md:flex-row-reverse'>
             <div className='w-full md:w-1/2 flex items-center justify-center'>
                <Image src={man} alt='man'/>
            </div>
            <div className='w-full md:w-1/2 flex justify-center text-left flex-col'>
                <h1 className='font-bold text-5xl my-10'>Mental Health</h1>
                <p className='w-[90%]'>Rorem ipsum dolor sit amet, consectetur ad
                    ipiscing elit.Rorem ipsum dolor sit amet,
                    consectetur adipiscing elit.Rorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className='bg-slate-900/50 w-40 my-10 text-white font-semibold rounded-lg h-[3em]'>Talk to Paddi Ai</button>
            </div>
    </div>
    </section>
  )
}

export default Page;
