import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import { medications } from "@/constants";

import Image from "next/image";

const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="9" />
        <form className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">Are you taking any medications?</h1>
            <div className="grid grid-cols-2 gap-5 my-20">
                {medications.map(({icon, text}) =>(
                    <div key={text} className="bg-white p-5 rounded-xl hover:border-2 border-brown-80">
                        <Image src={icon} alt={text} />
                        <p className="mt-10">{text}</p>
                    </div>
                ))}
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page