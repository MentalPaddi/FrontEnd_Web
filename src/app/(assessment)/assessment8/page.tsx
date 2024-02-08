import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import clock from '@/public/assets/clock.svg'
import { sleepQualities } from "@/constants";

import Image from "next/image";

const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="8" />
        <form className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">How would you rate your sleep quality?</h1>
            <div className="my-20">
                {sleepQualities.map(({quality, duration, icon}) => (
                    <div key={quality} className="flex my-1 hover:border-2 border-brown-80 rounded-xl p-5 mx-auto w-[70%]">
                        <div className="w-full">
                            <p className="font-bold text-lg">{quality}</p>
                            <div className="flex">
                                <Image src={clock} alt='clock'/>
                                <p className="text-xs">{duration}</p>
                            </div>
                        </div>
                        <div>
                            <Image src={icon} alt={quality} />
                        </div>
                    </div>
                ))}
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page