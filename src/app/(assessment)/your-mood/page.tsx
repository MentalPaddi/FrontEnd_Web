'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg'
import Image from "next/image";

import overjoyed from '@/public/assets/overjoyed.svg';
import happy from '@/public/moodIcons/happy.svg';
import neutral from '@/public/moodIcons/neutral.svg';
import sad from '@/public/moodIcons/sad.svg';
import worst from '@/public/assets/depressed.svg';
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAssessments, setAssessments } from "@/redux/features/assessmentSlice";
import { useRouter } from "next/navigation";

const moods = ['depressed', 'sad', 'neutral', 'happy', 'overjoyed']

const Page = () => {
  const router = useRouter();
  const [ mood, setMood ] = useState('');
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { assessments } = useAppSelector(selectAssessments)

  const handleSubmit = () => {
    if(!mood) return toast.error('You\'ve not selected your mood')
    setLoading(!loading)
    const selectedMood = moods.filter((mod, i)=> mod === mood);
    
    dispatch(setAssessments({...assessments, mood: moods.indexOf(selectedMood[0])+1 }))
    router.push('/sought-help-before')
  }

  return (
    <section className="p-5">
        <AssessmentNav pageNumber="5" />
        <div className=" max-w-[35em] mx-auto text-center">
            <h1 className="font-bold text-3xl text-brown-80 text-center m-10">How would you describe your mood?</h1>
            <div className="flex flex-col mb-5 items-center">
                <p className="font-bold m-2 text-lg text-[#736B66]">I Feel</p>
                <div className="flex m-5 flex-wrap gap-10 justify-center">
                  <div onClick={() => setMood('overjoyed')} className={`p-10 w-[12em] bg-white flex-col shadow-lg rounded-lg flex items-center justify-center border-brown-80 ${ mood==='overjoyed' && 'border-2'}`}>
                    <Image src={overjoyed} alt="overjoyed" width={40} height={40} />
                    <p className="p-2 text-[#736B66]">Over Joyed</p>
                  </div>
                  <div onClick={() => setMood('happy')} className={`p-10 w-[12em] bg-white flex-col shadow-lg rounded-lg flex items-center justify-center border-brown-80 ${ mood==='happy' && 'border-2'}`}>
                    <Image src={happy} alt="happy" width={40} height={40}/>
                    <p className="p-2 text-[#736B66]">Happy</p>
                  </div>
                  <div onClick={() => setMood('neutral')} className={`p-10 w-[12em] bg-white flex-col shadow-lg rounded-lg flex items-center justify-center border-brown-80 ${ mood==='neutral' && 'border-2'}`}>
                    <Image src={neutral} alt="neutral" width={40} height={40} />
                    <p className="p-2 text-[#736B66]">Neutral</p>
                  </div>
                  <div onClick={() => setMood('sad')} className={`p-10 w-[12em] bg-white flex-col shadow-lg rounded-lg flex items-center justify-center border-brown-80 ${ mood==='sad' && 'border-2'}`}>
                    <Image src={sad} alt="sad" width={40} height={40}/>
                    <p className="p-2 text-[#736B66]">Sad</p>
                  </div>
                  <div onClick={() => setMood('depressed')} className={`p-10 w-[12em] bg-white flex-col shadow-lg rounded-lg flex items-center justify-center border-brown-80 ${ mood==='depressed' && 'border-2'}`}>
                    <Image src={worst} alt="happy" width={40} height={40}/>
                    <p className="p-2 text-[#736B66]">Depressed</p> 
                  </div>
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