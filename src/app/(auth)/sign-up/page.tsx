'use client'

import Image from 'next/image';
import lock from '@/public/assets/lock.svg';
import email from '@/public/assets/email.svg';
import arrowRight from '@/public/assets/arrowRight.svg';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IoMdPerson } from "react-icons/io";
import { useSignUpUserMutation } from '@/api/authApi';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectLoader, setLoader } from '@/redux/features/loaderSlice';
import { Oval } from 'react-loader-spinner';
import { setSignInUser, setSignUpUser } from '@/redux/features/authSlice';

const Page = () => {
    const router = useRouter();
    const [signUpUser] = useSignUpUserMutation();

    const dispatch = useAppDispatch();
    const { componentLoading } = useAppSelector(selectLoader);

    type Inputs = {
        email: string;
        first_name: string;
        last_name: string;
        password: string;
        password2: string;
      }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();

      console.log(errors)
    const onSubmit: SubmitHandler<Inputs> = async(userData) => {

        const { password, password2 } = userData;
        if(password !== password2) return toast.error('Passwords dont match')

        dispatch(setSignUpUser(null))
        dispatch(setSignInUser(null))
        dispatch(setLoader('sign-up'))
        const signUpUserDetails = await signUpUser(userData)
        dispatch(setLoader(''));

   
        const { error, data }: any = signUpUserDetails;

        console.log({error, data})

        if (error) {
            if (error?.data?.email) {
                error.data.email.map((err:string)=>{
                    toast.error(err);
                })
                return;
              } else if ( error?.data?.password ) {
                error.data.password.map((err:string)=>{
                    toast.error(err);
                })
                return
              } else if (error?.error) {
                toast.error('Network Failure');
                return
              }
              toast.error("Something went wrong");
            return
        }

        if (data) {
            toast.success(data.message)
            dispatch(setSignUpUser(signUpUserDetails))
            dispatch(setSignInUser(null))
        }

        router.push('/your-health'); 
    }

    return(
        <div className='bg-blue w-full md:mb-20 max-w-[33em] mx-auto bg-white rounded-t-3xl md:rounded-b-3xl'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-10'> 
                <p className="text-3xl font-bold text-brown-80 p-10 text-center">Sign Up For Free</p>
                <div className='my-5'>
                    <label className='font-semibold text-black my-5'>Email Address</label>
                    <div className='w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]'>
                        <Image src={email} alt='lock' width={25} height={25} className='m-3'/>
                        <input type="email" {...register("email", { required: true })} className='outline-none w-[80%]' placeholder="user@gmail.com" />
                    </div>
                </div>
                <div className='my-5'>
                    <label className='font-semibold text-black my-5'>First Name</label>
                    <div className='w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]'>
                        <IoMdPerson className='m-4 w-6 h-6 text-brown-80'/>
                        <input type="text" {...register("first_name", { required: true })} className='outline-none w-[80%]' placeholder="eg. john" />
                    </div>
                </div>
                <div className='my-5'>
                    <label className='font-semibold text-black my-5'>Last Name</label>
                    <div className='w-full h-[3.5em] mx-auto flex items-center rounded-full shadow-box-shadow border-[1px]'>
                        <IoMdPerson className='m-4 w-6 h-6 text-brown-80'/>
                        <input type="text" {...register("last_name", { required: true })} className='outline-none w-[80%]' placeholder="eg. toks" />
                    </div>
                </div>
                <div className='my-5'>
                    <label className='font-semibold text-black my-5'>Password</label>
                    <div className='w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]'>
                        <Image src={lock} alt='lock' width={25} height={25} className='m-3'/>
                        <input type="password" {...register("password", { required: true, minLength: 8 })} className='outline-none w-[80%]' placeholder="Enter your password" />
                    </div>
                </div>
                <div className='my-5'>
                    <label className='font-semibold text-black my-5'>Password Confirmation</label>
                    <div className='w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]'>
                        <Image src={lock} alt='lock' width={25} height={25} className='m-3'/>
                        <input type="password" {...register("password2", { required: true, minLength: 8 })} className='outline-none w-[80%]' placeholder="Confirm your password" />
                    </div>
                </div>
                <div>
                    {errors?.password?.type === 'minLength' && <p> Password must be up to 8 characters</p>}
                </div>
                <div className='my-10'>
                    <button className='w-full h-[3.5em] bg-primary rounded-full text-white font-bold flex items-center justify-center gap-3'>
                        {
                            componentLoading === 'sign-up' ?
                            (<Oval height="40" width="40" color="#fff" secondaryColor='#fff' strokeWidth='5' ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" visible={true} />) :
                            (<>Assessment <Image src={arrowRight} alt='arrow-right' width={30} height={30}/></>)
                        }
                    </button>
                    <div className='text-center m-5 font-medium'>
                        <p>Already have an account? <Link href='/sign-in'><span className='text-primary underline cursor-pointer'>Sign In.</span></Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
};


export default Page;