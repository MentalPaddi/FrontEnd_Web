import Image from "next/image"

const Button = ({title, icon} : { title: string; icon: string}) => {
  return (
    <button className='w-full h-[3.5em] bg-primary rounded-full text-white font-bold flex items-center justify-center gap-3'>    
    {title}
    <Image src={icon} alt='arrow-right' width={30} height={30}/> 
    </button>
  )
}

export default Button