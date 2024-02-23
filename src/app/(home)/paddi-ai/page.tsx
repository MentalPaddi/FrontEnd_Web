import Image from 'next/image'
import ai from '@/public/assets/paddiAi.svg';

const Page = () => {
  return (
    <section className='bg-white p-10 md:p-20 min-h-screen'>
        <p className='font-bold text-3xl'>Paddi AI</p>

        <div className='w-full my-20 flex items-center justify-center'>
            <Image className='w-[20em] h-[20em]' src={ai} width={100} height={100} alt='paddi-ai' />
        </div>

        <div className='flex items-center flex-col w-full'>
            <p className='font-bold text-xl'>Talk to Paddi AI</p>
            <p className='font-semibold w-[15em] text-center'>You have no AI conversation. Get your mind healthy by starting one</p>
        </div>

        <div className='w-full flex justify-center'>
          <button className='p-5 bg-primary mb-10 rounded-full w-[20em] text-white font-bold mt-20 mx-auto'>New conversation </button>
        </div>
    </section>
  )
}

export default Page