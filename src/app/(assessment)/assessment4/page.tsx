import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg'
import Image from "next/image";
import meter from '@/public/assets/weightMeter.svg'

const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="4" />
        <form className=" max-w-[35em] mx-auto text-center">
            <h1 className="font-bold text-3xl text-[#0F8BD0] text-center m-10">Whats your weight?</h1>
            <div className="flex flex-col items-center">
                <div className="w-60 mx-auto h-10 flex items-center justify-between font-semibold my-5 rounded-full bg-white">
                    <p className="w-1/2 bg-dark-blue text-white h-full p-2 rounded-full">kg</p>
                    <p className="w-1/2">Ibs</p>
                </div>
                <div className="flex items-end">
                    <p className="text-[4em] text-brown-80 font-bold">128</p>
                    <p className="mb-5">kg</p>
                </div>
                <Image src={meter} alt="meter" className="my-10" width={250} height={250} />
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page