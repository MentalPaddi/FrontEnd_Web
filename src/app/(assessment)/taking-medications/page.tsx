'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import { medications } from "@/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAssessments, setAssessments } from "@/redux/features/assessmentSlice";
import toast from "react-hot-toast";

const Page = () => {
  const [ medication, setMedication ] = useState('')
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { assessments } = useAppSelector(selectAssessments);

  const handleSubmit = () => {
    if(!medication) return toast.error('Youve not selected any medications');
    setLoading(!loading)
    dispatch(setAssessments({...assessments, medications: medication }))
    router.push('/other-symptoms');
  }
  
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="9" />
        <div className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">Are you taking any medications?</h1>
            <div className="grid grid-cols-2 gap-5 my-20">
                {medications.map(({icon, text}) =>(
                    <div key={text} onClick={()=> setMedication(text)} className={`bg-white p-5 rounded-xl shadow-lg hover:border-2 border-brown-80 ${medication===text && 'border-2'}`}>
                        <Image src={icon} alt={text} />
                        <p className="mt-10">{text}</p>
                    </div>
                ))}
            </div>
            <div onClick={()=> handleSubmit()}>
              <Button title="Continue" icon={rightArrow} loading={loading}/>
            </div>
        </div>
    </section>
  )
}

export default Page