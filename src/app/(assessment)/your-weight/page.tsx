'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { selectAssessments, setAssessments } from "@/redux/features/assessmentSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { assessments } = useAppSelector(selectAssessments);

  interface Inputs {
        weight: number;
  }

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();

const onSubmit: SubmitHandler<Inputs> = ({weight}) => {
    setLoading(!loading)
    dispatch(setAssessments({...assessments, weight: Number(weight)}))
    router.push('/your-mood')
  }

  return (
    <section className="p-5">
        <AssessmentNav pageNumber="4" />
        <form onSubmit={handleSubmit(onSubmit)} className=" max-w-[35em] mx-auto text-center">
            <h1 className="font-bold text-3xl text-[#0F8BD0] text-center m-10">Whats your weight?</h1>
            <div className="flex flex-col items-center">
                <div className="w-60 mx-auto h-10 flex items-center justify-between font-semibold my-5 rounded-full bg-white">
                    <p className="w-1/2 bg-dark-blue text-white h-full p-2 rounded-full">kg</p>
                    <p className="w-1/2">Ibs</p>
                </div>
                <div className="my-20 flex flex-col gap-5">
                    <input type="number" {...register("weight", { required: true })} className="border-b-2 text-center text-4xl font-bold outline-none text-brown-80 border-brown-80 bg-[#F2F2F2]"/>
                    { errors.weight && <span className="text-red-500">This field is required</span>}
                </div>
            </div>
            <Button title="Continue" icon={rightArrow} loading={loading}/>
        </form>
    </section>
  )
}

export default Page