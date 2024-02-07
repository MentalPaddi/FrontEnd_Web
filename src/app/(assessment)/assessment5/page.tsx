import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg'
import Image from "next/image";
import meter from '@/public/assets/moodScale.svg';
import emotion from '@/public/assets/Emotion.svg'
import arrowDown from '@/public/assets/doubleDown.svg'

const Page = () => {
  return (
    <section className="p-5">
        <AssessmentNav pageNumber="5" />
        <form className=" max-w-[35em] mx-auto text-center">
            <h1 className="font-bold text-3xl text-brown-80 text-center m-10">How would you describe your mood?</h1>
            <div className="flex flex-col mb-5 items-center">
                <p className="font-bold m-2 text-lg text-[#736B66]">I Feel Neutral</p>
                <Image src={emotion} alt="mood" />
                <Image src={arrowDown} alt="down" className="mt-[-4em] mb-[2em]" />
                <Image src={meter} alt="scale" />
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page