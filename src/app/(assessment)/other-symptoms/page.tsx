'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg';
import health from '@/public/assets/healthSymptoms.svg'
import { selectAssessments, setAssessments } from "@/redux/features/assessmentSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { useForm } from "react-hook-form";

interface Inputs {
  symptoms: string;
}

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { assessments } = useAppSelector(selectAssessments)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = ({ symptoms }: { symptoms: string }) => {
    dispatch(setAssessments({...assessments, other_mental_symptom: symptoms }))
    router.push('/stress-level')
  };

  return (
    <section className="p-5">
        <AssessmentNav pageNumber="10" />
        <form className="max-w-[35em] mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-bold text-3xl text-[#4F3422] text-center m-10">Do you have other mental health symptoms?</h1>
            <div className="flex items-center flex-col my-20">
                <Image src={health} alt="health" />
                <div className="flex items-center flex-col">
                  <textarea
                    placeholder="Write a comment..."
                    cols={30} rows={10} className="p-5  rounded-xl my-10"
                    {...register("symptoms", { required: true, maxLength: 100 })} 
                  />
                  {errors.symptoms && <span className="text-red-500">This field is required</span>}
                  <p className="text-center font-semibold">Most Common: <span className="text-primary">Drug Abuse, Angry, Depressed</span></p>
                </div>
            </div>
            <Button title="Continue" icon={rightArrow} />
        </form>
    </section>
  )
}

export default Page;
