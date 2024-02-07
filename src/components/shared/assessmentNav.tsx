import Image from "next/image";
import leftArrow from '@/public/assets/ArrowLeft.svg';

const AssessmentNav = ({pageNumber}: {pageNumber: string}) => {
  return (
    <nav className="flex justify-between items-center">
        <div className="flex my-5 items-center">
            <Image src={leftArrow} alt="left-arrow" width={30} height={30}/>
            <p className="text-[#4F3422] font-bold mx-3 text-lg">Assessment</p>
        </div>
        <p className="rounded-full p-2 text-center font-medium text-[#926247] w-20 bg-[#E8DDD9]">
            {pageNumber} OF 13
        </p>
    </nav>
  )
}

export default AssessmentNav