'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import Image from "next/image";
import { useRouter } from "next/navigation";

import { healths } from "@/constants";
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react";

type Inputs = {
  health: string
}


const Page = () => {
    const [clicked, setClicked] = useState('');
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)

        router.push('/your-gender');
    }

    console.log(clicked)

  return (
    <section className="p-5">
        <AssessmentNav pageNumber="1" />
        <form onSubmit={handleSubmit(onSubmit)} className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">What’s your health goal today?</h1>
            <div className="flex mb-10 flex-col gap-3">
                {healths.map(({text, icon})=> (
                    <div key={text} onClick={()=> setClicked(text)} className={`p-3 flex justify-between rounded-full hover:border-2 border-brown-80 ${clicked == text ? 'bg-primary hover:border-none' : 'bg-white'}`}>
                        <div className="flex items-center">
                            <Image src={icon} alt='health' />
                            <p  className={`font-semibold mx-2 ${clicked == text ? 'text-white' : 'text-brown-80'}`}>{text}</p>
                        </div>
                        <input type='radio' value={text} checked={(text == clicked)} {...register("health", { required: true })} name='health' className="w-5" />
                    </div>
                ))}
                {errors.health && <span className="text-center font-semibold text-red-500">Please select a field</span>}
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page