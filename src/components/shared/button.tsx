import Image from "next/image"
import { Oval } from "react-loader-spinner";

const Button = ({title, icon, loading} : { title: string; icon: string; loading: boolean}) => {
  return (
    <button className='w-full h-[3.5em] shadow-lg bg-primary rounded-full text-white font-bold flex items-center justify-center gap-3'>    
      {loading ? 
      <>
        <Oval height="40" width="40" color="#fff" secondaryColor='#fff' strokeWidth='5' ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
      </> : 
      <>
        {title}
        <Image src={icon} alt='arrow-right' width={30} height={30}/> 
      </>}
    </button>
  )
}

export default Button