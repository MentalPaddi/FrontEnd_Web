import Image from 'next/image';

import lock from '@/public/assets/lock.svg';
import email from '@/public/assets/email.svg';
import arrowRight from '@/public/assets/arrowRight.svg'

const Page = () => (
    <div className='bg-blue w-full mb-20 max-w-[33em] mx-auto bg-white rounded-3xl text-[.8em] md:text-[1em]'>
        <form className='p-10'>
            <p className="text-3xl font-bold text-brown-80 p-10 text-center">Sign Up For Free</p>
            <div className='my-5'>
                <label className='font-semibold text-black my-5'>Email Address</label>
                <div className='w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]'>
                    <Image src={email} alt='lock' width={25} height={25} className='m-3'/>
                    <input type="email" className='outline-none' placeholder="princesskaguya@gmail.com" />
                </div>
            </div>
            <div className='my-5'>
                <label className='font-semibold text-black my-5'>First Name</label>
                <div className='w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]'>
                    <Image src={lock} alt='lock' width={25} height={25} className='m-3'/>
                    <input type="text" className='outline-none' placeholder="eg. john" />
                </div>
            </div>
            <div className='my-5'>
                <label className='font-semibold text-black my-5'>Last Name</label>
                <div className='w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]'>
                    <Image src={lock} alt='lock' width={25} height={25} className='m-3'/>
                    <input type="email" className='outline-none' placeholder="eg. toks" />
                </div>
            </div>
            <div className='my-5'>
                <label className='font-semibold text-black my-5'>Password</label>
                <div className='w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]'>
                    <Image src={lock} alt='lock' width={25} height={25} className='m-3'/>
                    <input type="password" className='outline-none' placeholder="Enter your password" />
                </div>
            </div>
            <div className='my-5'>
                <label className='font-semibold text-black my-5'>Password Confirmation</label>
                <div className='w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]'>
                    <Image src={lock} alt='lock' width={25} height={25} className='m-3'/>
                    <input type="password" className='outline-none' placeholder="Confirm your password" />
                </div>
            </div>
            <div className='my-10'>
                <button className='w-full h-[3.5em] bg-primary rounded-full text-white font-bold flex items-center justify-center gap-3'>Assessment <Image src={arrowRight} alt='arrow-right' width={30} height={30}/></button>
                <div className='text-center m-5 font-medium'>
                    <p>Already have an account? <span className='text-primary underline cursor-pointer'>Sign In.</span></p>
                </div>
            </div>
        </form>
    </div>
);

export default Page;