import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const Page = () => {
  return (
    <section className='p-10 md:p-20'>
        <Link href='/profile'>
            <nav className="flex items-center font-bold text-xl gap-3 text-brown-80">
                <IoIosArrowBack className="w-10 h-10" />
                <p>Edit Profile</p>
            </nav>
        </Link>
        <form className="text-brown-80 mt-10">
            <div className="w-full p-5 font-semibold">
                <p>First Name</p>
                <input type="text" className="p-2 mt-2 w-full rounded-xl h-[3.2em]"/>
            </div>
            <div className="w-full p-5 font-semibold">
                <p>Last Name</p>
                <input type="text" className="p-2 mt-2 w-full rounded-xl h-[3.2em]"/>
            </div>
            <div className="w-full p-5 font-semibold">
                <p>Phone Number</p>
                <input type="number" className="p-2 mt-2 w-full rounded-xl h-[3.2em]"/>
            </div>
            <div className="w-full p-5 font-semibold">
                <p>School</p>
                <p></p>
                <input type="number" className="p-2 mt-2 w-full rounded-xl h-[3.2em]"/>
            </div>
            <div className="w-full p-5 font-semibold">
                <p>Address</p>
                <input type="number" className="p-2 mt-2 w-full rounded-xl h-[3.2em]"/>
            </div>

            <p className="bg-primary cursor-pointer p-5 font-bold text-center text-white rounded-full w-full max-w-[20em] mt-10 mx-auto">Save Changes</p>
        </form>
    </section>
  )
}

export default Page