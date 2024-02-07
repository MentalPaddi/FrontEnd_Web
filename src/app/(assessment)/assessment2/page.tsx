import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg'
import cancel from '@/public/assets/x.svg'
import Image from "next/image";


const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="2" />
        <form className=" max-w-[35em] mx-auto text-center">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">What’s your official gender?</h1>
            <div className="flex mb-10 flex-col gap-3">
              <div className="rounded-xl mx-auto bg-white w-[20em] h-[10em]">
              </div>
              <div className='rounded-xl mx-auto bg-white w-[20em] h-[10em]'>

              </div>
            </div>
            <p className="flex m-5 justify-center cursor-pointer font-semibold">Prefer to skip, thanks
                <Image src={cancel} alt="cancel"   />
            </p>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page