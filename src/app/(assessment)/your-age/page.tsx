'use client'

import AssessmentNav from "@/components/shared/assessmentNav";
import Button from "@/components/shared/button";
import rightArrow from '@/public/assets/arrowRight.svg'
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAssessments, setAssessments } from "@/redux/features/assessmentSlice";
import { useState } from "react";

type Inputs = {
  age: string
}

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { assessments } = useAppSelector(selectAssessments)

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({age}) => {
      setLoading(!loading)
      dispatch(setAssessments({...assessments, age}))
      router.push('/your-weight')
  }

  return (
    <section className="p-5">
        <AssessmentNav pageNumber="3" />
        <form onSubmit={handleSubmit(onSubmit)} className=" max-w-[35em] mx-auto text-center">
            <h1 className="font-bold text-3xl text-[#0F8BD0] text-center m-10">Whats your age?</h1>
            <div className="my-20 flex flex-col gap-5">
              <input type="number" {...register("age", { required: true, maxLength: 3})} className="border-b-2 text-center text-4xl font-bold outline-none text-brown-80 border-brown-80 bg-[#F2F2F2]"/>
              {errors.age?.type === 'maxLength' && <span className="text-center font-semibold text-red-500"> Age must be less than 4 number</span>}
              {errors.age?.type === 'required' && <span className="text-center font-semibold text-red-500">Please input your age</span>}
            </div>
            <Button title="Continue" icon={rightArrow} loading={loading}/>
        </form>
    </section>
  )
}

export default Page