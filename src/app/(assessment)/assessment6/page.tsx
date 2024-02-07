import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import help from '@/public/assets/help.svg'
import Image from "next/image";


const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="6" />
        <form className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">Have you sought professional help before?</h1>
            <div className="flex mb-10 flex-col items-center gap-3">
              <Image src={help} alt="help"/>
              <div className="flex flex-row gap-3 font-bold mt-5">
                <p className="p-2 text-white w-[7em] h-10 text-center rounded-full bg-dark-blue">Yes</p>
                <p className="p-2 text-primary bg-white w-[7em] h-10 rounded-full text-center">No</p>
              </div>
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page