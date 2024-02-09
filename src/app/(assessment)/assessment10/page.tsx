import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import health from '@/public/assets/healthSymptoms.svg'

import Image from "next/image";

const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="10" />
        <form className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">Do you have other mental health symptoms?</h1>
            <div className="flex items-center flex-col my-20">
                <Image src={health} alt="health" />
                <div className="flex items-center flex-col">
                    <textarea name="" id="" cols="30" rows="10" className="p-5  rounded-xl my-10"></textarea>
                    <p className="text-center font-semibold">Most Common: <span className="text-primary">Drug Abuse, Angry, Depressed</span></p>
                </div>
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page