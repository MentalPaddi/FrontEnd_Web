import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';

const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="12" />
        <form className=" max-w-[35em] mx-auto">
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">Do you have other mental health symptoms?</h1>
            <p className="text-[#736B66] w-[80%] text-center mx-auto">Freely write down anything thats on your mind. Mentalpaddi is here to listen...</p>
            <div className="flex items-center flex-col my-10">
                <div className="flex items-center flex-col">
                    <textarea name="" id="" cols={40} rows={10} className="p-5  rounded-xl my-10"></textarea>
                </div>
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page