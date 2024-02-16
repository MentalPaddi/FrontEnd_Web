'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg'
import cancel from '@/public/assets/x.svg'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


const Page = () => {
  const [gender, setGender] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(gender)
    router.push('/your-age')
  }

  return (
    <section className="p-5">
        <AssessmentNav pageNumber="2" />
        <form onSubmit={(e) => handleSubmit(e)} className=" max-w-[35em] mx-auto text-center">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">What’s your official gender?</h1>
            <div className="flex mb-10 flex-col gap-3">
              <div onClick={()=> setGender('male')} className={`rounded-xl hover:border-2 border-brown-80 mx-auto bg-white w-[20em] flex items-center justify-center h-[10em] ${gender === 'male' && 'border-2'} `}>
                <p className="font-bold text-2xl text-brown-80">Male</p>
              </div>
              <div onClick={()=> setGender('female')} className={`rounded-xl hover:border-2 border-brown-80 mx-auto flex items-center justify-center bg-white w-[20em] h-[10em] ${gender === 'female' && 'border-2'}`}>
                <p className="font-bold text-2xl text-brown-80">Female</p>
              </div>
            </div>
            <p onClick={()=> router.push('/your-age')} className="flex m-5 justify-center cursor-pointer font-semibold">
                <span>Prefer to skip, thanks</span>
                <Image src={cancel} alt="cancel"   />
            </p>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page