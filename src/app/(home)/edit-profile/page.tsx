'use client'

import { useUpdateProfileMutation } from "@/api/authApi";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";

const Page = () => {
    const [updateProfile] = useUpdateProfileMutation();

    type Inputs = {
        // first_name: string;
        // last_name: string;
        address: string;
        profile_pic: string;
        school: string;
        phone_number: number;
      }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async(userData) => {
        const formData = new FormData();
        Object.entries(userData).forEach(([key, value]:any) => {
          formData.append(key, value);
        });
        const result = await updateProfile(formData);
    }

  return (
    <section className='p-10 md:p-20'>
        <Link href='/profile'>
            <nav className="flex items-center font-bold text-xl gap-3 text-brown-80">
                <IoIosArrowBack className="w-10 h-10" />
                <p>Edit Profile</p>
            </nav>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} className="text-brown-80 mt-10 mb-20">
            <div className="w-full p-5 font-semibold">
                <p>First Name</p>
                <input type="text" className="p-2 mt-2 w-full rounded-xl h-[3.2em]" />
            </div>
            <div className="w-full p-5 font-semibold">
                <p>Last Name</p>
                <input type="text" className="p-2 mt-2 w-full rounded-xl h-[3.2em]" />
            </div>
            <div className="w-full p-5 font-semibold">
                <p>Phone Number</p>
                <input type="number" className="p-2 mt-2 w-full rounded-xl h-[3.2em]" {...register("phone_number", { required: true })}/>
            </div>
            <div className="w-full p-5 font-semibold">
                <p>School</p>
                <p></p>
                <input type="text" className="p-2 mt-2 w-full rounded-xl h-[3.2em]" {...register("school", { required: true })}/>
            </div>
            <div className="w-full p-5 font-semibold">
                <p>Address</p>
                <input type="text" className="p-2 mt-2 w-full rounded-xl h-[3.2em]" {...register("address", { required: true })}/>
            </div>
            <div className="w-full p-5 font-semibold">
                <label htmlFor="image">User Image</label>
                <div className="p-2 mt-2 w-full rounded-xl h-[3.2em] bg-white flex items-center justify-center border-dashed border-brown-80 border-[1.2px]">
                    <input type="file" accept="image/*" {...register("profile_pic", { required: true })} />
                </div>
            </div>

            <p className="bg-primary cursor-pointer p-5 font-bold text-center text-white rounded-full w-full max-w-[20em] mt-10 mx-auto"><button>Save Changes</button></p>
        </form>
    </section>
  )
}

export default Page