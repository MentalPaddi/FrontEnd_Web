'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import { selectAssessments, setAssessments } from "@/redux/features/assessmentSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [ distress, setDistress ] = useState(false)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { assessments } = useAppSelector(selectAssessments);

  const symptoms = [
    'I\'m experiencing physical pain in different place over my body.',
    'I\'m not experiencing any physical pain in my body at all'
  ];

  const handleSubmit = () => {
    setLoading(!loading)
    dispatch(setAssessments({...assessments, is_physical_distress: Number(distress)+1 }))
    router.push('/sleep-quality');
  }

  return (
    <section className="p-5">
        <AssessmentNav pageNumber="7" />
        <div className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">Are you experiencing any physical distress?</h1>
            <div className="flex mb-10 flex-col items-center gap-3">
             <div onClick={()=> setDistress(true)} className={`bg-white p-10 shadow-lg rounded-xl max-w-[30em] border-brown-80 cursor-pointer ${distress===true && 'border-2'}`}>
                <p className="font-bold text-brown-80">Yes, one or multiple</p>
                <p className="text-[#736B66]">{symptoms[0]}</p>
             </div>
             <div onClick={()=> setDistress(false)} className={`bg-white p-10 shadow-lg rounded-xl max-w-[30em] border-brown-80 cursor-pointer ${distress===false && 'border-2'}`}>
                <p className="font-bold text-brown-80">No Physical Pain At All</p>
                <p className="text-[#736B66]">{symptoms[1]}</p>
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