'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import help from '@/public/assets/help.svg'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAssessments, setAssessments } from "@/redux/features/assessmentSlice";


const Page = () => {
  const [ profHelp, setProfHelp ] = useState(false)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { assessments } = useAppSelector(selectAssessments)

  const handleSubmit = () => {
    setLoading(!loading)
    dispatch(setAssessments({...assessments, is_professional_help: Number(profHelp)+1}));
    router.push('/experiencing-distress');
  }

  return (
    <section className="p-5">
        <AssessmentNav pageNumber="6" />
        <div className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">Have you sought professional help before?</h1>
            <div className="flex mb-10 flex-col items-center gap-3">
              <Image src={help} alt="help"/>
              <div className="flex flex-row gap-3 font-bold mt-5">
                <p onClick={()=> setProfHelp(true)} className={`p-2 w-[7em] h-10 text-center rounded-full ${profHelp===true ? 'bg-dark-blue text-white' : 'bg-white text-primary'}`}>Yes</p>
                <p onClick={()=> setProfHelp(false)} className={`p-2 w-[7em] h-10 rounded-full text-center ${profHelp===false ? 'bg-dark-blue text-white' : 'bg-white text-primary'}`}>No</p>
              </div>
            </div>
            <div onClick={()=> handleSubmit()}>
            <Button title="Continue" icon={rightArrow} loading={loading}/>
            </div>
        </div>
    </section>
  )
}

export default Page