import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';


const Page = () => {
    const numbers = Array.from({ length: 5}, (_, index) => index++);
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="11" />
        <form className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">How would you rate your stress level?</h1>
            <div className="flex items-center flex-col my-20">
              <p className="text-brown-80 font-bold text-8xl mb-10">5</p>
              <div className="p-2 justify-between rounded-full bg-white  flex ">
                {numbers.map((number)=> (
                    <p key={number} className="w-[3.5em] h-[3.5em] hover:bg-primary text-lg hover:text-white flex items-center justify-center p-5 rounded-full font-bold text-brown-80">{number}</p>
                ))}
              </div>
              <p className="text-red-600 font-semibold mt-5">You Are Exremely Stressed Out.</p>
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page