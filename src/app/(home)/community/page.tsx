import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import { PiShareFatLight } from "react-icons/pi";
import profile from '@/public/images/profile.png';

const Page = () => {
  return (
    <section className="p-10 md:p-20">
        <nav className="text-brown-80 flex items-center text-3xl justify-between">
            <p className="font-bold">Community</p>
            <IoIosNotificationsOutline />
        </nav>
        <div className="flex items-center gap-5 pt-7 overflow-x-auto text-[.9em] md:text-[1em]">
            <p className="p-3 bg-primary text-white font-semibold rounded-xl">Trending</p>
            <p className="p-3 bg-white opacity-60 font-semibold rounded-xl">Relationships</p>
            <p className="p-3 bg-white opacity-60 font-semibold rounded-xl">Self care</p>
        </div>

        <div className="py-10">
            <div className="flex items-start gap-3 border-b-[.5px] pb-3 pt-4 border-opacity-15 border-brown-80">
                <div>
                    <Image src={profile} width={30} height={30} className="rounded-full" alt="profile"/>
                </div>
                <div className="flex items-center flex-col gap-3 text-brown-80">
                    <div className="">
                        <div className="flex items-center ">
                            <p className="text-sm font-semibold mr-2">Coal Dingoo</p>
                            <span className="opacity-70 text-xs">just now</span>
                        </div>
                        <p className="opacity-80 text-xs">Is there a therapy which can cure crossdressing & bdsm compulsion?</p>
                    </div>
                    <div className="flex items-center gap-3 text-brown-80 opacity-70 p-1 w-full">
                        <div className="flex items-center gap-3">
                            <AiOutlineLike />
                            <GoComment />
                        </div>
                        <PiShareFatLight />
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-3 border-b-[.5px] pb-3 pt-6 border-opacity-15 border-brown-80">
                <div>
                    <Image src={profile} width={30} height={30} className="rounded-full" alt="profile"/>
                </div>
                <div className="flex items-center flex-col gap-3 text-brown-80">
                    <div className="">
                        <div className="flex items-center ">
                            <p className="text-sm font-semibold mr-2">Coal Dingoo</p>
                            <span className="opacity-70 text-xs">just now</span>
                        </div>
                        <p className="opacity-80 text-xs">Is there a therapy which can cure crossdressing & bdsm compulsion?</p>
                    </div>
                    <div className="flex items-center gap-3 text-brown-80 opacity-70 p-1 w-full">
                        <div className="flex items-center gap-3">
                            <AiOutlineLike />
                            <GoComment />
                        </div>
                        <PiShareFatLight />
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-3 border-b-[.5px] pb-3 pt-6 border-opacity-15 border-brown-80">
                <div>
                    <Image src={profile} width={30} height={30} className="rounded-full" alt="profile"/>
                </div>
                <div className="flex items-center flex-col gap-3 text-brown-80">
                    <div className="">
                        <div className="flex items-center ">
                            <p className="text-sm font-semibold mr-2">Coal Dingoo</p>
                            <span className="opacity-70 text-xs">just now</span>
                        </div>
                        <p className="opacity-80 text-xs">Is there a therapy which can cure crossdressing & bdsm compulsion?</p>
                    </div>
                    <div className="flex items-center gap-3 text-brown-80 opacity-70 p-1 w-full">
                        <div className="flex items-center gap-3">
                            <AiOutlineLike />
                            <GoComment />
                        </div>
                        <PiShareFatLight />
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-3 border-b-[.5px] pb-3 pt-6 border-opacity-15 border-brown-80">
                <div>
                    <Image src={profile} width={30} height={30} className="rounded-full" alt="profile"/>
                </div>
                <div className="flex items-center flex-col gap-3 text-brown-80">
                    <div className="">
                        <div className="flex items-center ">
                            <p className="text-sm font-semibold mr-2">Coal Dingoo</p>
                            <span className="opacity-70 text-xs">just now</span>
                        </div>
                        <p className="opacity-80 text-xs">Is there a therapy which can cure crossdressing & bdsm compulsion?</p>
                    </div>
                    <div className="flex items-center gap-3 text-brown-80 opacity-70 p-1 w-full">
                        <div className="flex items-center gap-3">
                            <AiOutlineLike />
                            <GoComment />
                        </div>
                        <PiShareFatLight />
                    </div>
                </div>
            </div>
        </div>

        <div className="w-[2.8em] text-2xl fixed bottom-[4em] cursor-pointer h-[2.8em] right-10 bg-primary text-white rounded-full flex items-center justify-center">
            <GoPencil />
        </div>
    </section>
  )
}

export default Page