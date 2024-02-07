import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg'


const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="3" />
        <form className=" max-w-[35em] mx-auto text-center">
            <h1 className="font-bold text-3xl text-[#0F8BD0] text-center m-10">What's your age?</h1>
            <div className="flex mb-10 flex-col gap-1 font-bold items-center">
              <div><p className="text-[#E1E1E0] text-[3em]">16</p></div>
              <div><p className="text-[4em] text-[#ACA9A5]">17</p></div>
              <div className="text-[#F2F5EB] w-[15em] font-bold bg-[#045481] text-center p-5 rounded-full"><p className="text-[5em]">18</p></div>
              <div><p className="text-[4em] text-[#ACA9A5]">19</p></div>
              <div><p className="text-[#E1E1E0] text-[3em]">20</p></div>
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page