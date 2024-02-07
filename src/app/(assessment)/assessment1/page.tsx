import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg'
import Image from "next/image";

import heart from '@/public/assets/Solidheart.svg';
import vector from '@/public/assets/Vector.svg';
import flag from '@/public/assets/Solidflag.svg';
import happy from '@/public/assets/moodHappy.svg';
import mobile from '@/public/assets/SolidMobile.svg';


const healths = [
    {
        icon: heart,
        text: 'I wanna reduce stress'
    },
    {
        icon: vector,
        text: 'I wanna try AI Therapy'
    },
    {
        icon: flag,
        text: 'I want to cope with trauma'
    },
    {
        icon: happy,
        text: 'I want to be a better person'
    },
    {
        icon: mobile,
        text: 'Just trying out the website'
    },

]

const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="1" />
        <form className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">What’s your health goal today?</h1>
            <div className="flex mb-10 flex-col gap-3">
                {healths.map(({text, icon})=> (
                    <div key={text} className="p-3 flex justify-between bg-white rounded-full">
                        <div className="flex items-center">
                            <Image src={icon} alt='health' />
                            <p  className="font-semibold mx-2 text-[#4F3422]">{text}</p>
                        </div>
                        <input type='radio' name='health' className="w-5" />
                    </div>
                ))}
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page