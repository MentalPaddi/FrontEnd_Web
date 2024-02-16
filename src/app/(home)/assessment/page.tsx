import Image from 'next/image';
import message from '@/public/assets/message-notif.svg';
import chat from "@/public/assets/chat.svg";
import robot from '@/public/assets/robot.svg';
import add from '@/public/assets/add.svg';

const Page = () => {
  return (
    <main>
      <section className="bg-[#045481] w-full rounded-b-[4em] md:rounded-b-[6em] h-60 pt-20">
        <div className="w-[88%] mx-auto ">
          <div className="flex items-center my-2">
            <div className="rounded-full bg-[#F7F4F2] mr-3 h-10 w-10"></div>
            <div>
              <h2 className="text-white font-bold text-xl">Hi, Neil</h2>
              <p className='text-[#94F815]'>Happy</p>
            </div>
          </div>
          <div>
            <input type="text" className="w-full p-3 rounded-full bg-[#F7F4F2]" placeholder='Search anything' />
          </div>
        </div>
      </section>
      
      <section className="p-10 flex flex-col items-start w-full">
        <p className="font-bold text-md my-5">AI Therapy Chatbot</p>
        <div className='flex flex-col items-center'>
          <div className="bg-[#0F8BD0] flex justify-between text-white rounded-3xl h-[16em] w-full max-w-[30em] p-10">
            <div className='font-semibold'>
              <div className='flex items-center'>
                <Image src={message} alt='message' />
                <p className='font-semibold text-xl pl-2'>1293</p>
              </div>
              <p>Conversation</p>
              <div className='flex items-center py-5'>
                <Image src={chat} alt='chat' />
                <p>20 Chat left</p>
              </div>
            </div>
            <div>
              <Image src={robot} alt='robot'/>
            </div>
          </div>
          <Image src={add} alt='add' className='relative bottom-7'/>
        </div>
      </section>

      <section className='p-10'>
        <p className='font-bold text-md my-5'>Tracker</p>
        <div className='w-full'>
          <div className='rounded-2xl bg-[#ADD8E6] w-full p-4 h-[4.5em] max-w-[30em]'>
            <div className='w-10 h-10 bg-black rounded-lg'>

            </div>
          </div>
        </div> 
      </section>
    </main>
  )
}

export default Page