import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import help from '@/public/assets/help.svg'
import Image from "next/image";


const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="7" />
        <form className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">Are you experiencing any physical distress?</h1>
            <div className="flex mb-10 flex-col items-center gap-3">
             <div className="bg-white p-10 rounded-xl max-w-[30em] cursor-pointer">
                <p className="font-bold text-brown-80">Yes, one or multiple</p>
                <p className="text-[#736B66]">I’m experiencing physical pain in different place over my body.</p>
             </div>
             <div className="bg-white p-10 rounded-xl max-w-[30em] cursor-pointer">
                <p className="font-bold text-brown-80">No Physical Pain At All</p>
                <p className="text-[#736B66]">I’m not experiencing any physical pain in my body at all</p>
             </div>
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page