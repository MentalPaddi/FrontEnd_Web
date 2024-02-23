import CircularProgressBar from '@/components/shared/circulerProgress';
import leftArrow from '@/public/assets/ArrowLeftWhite.svg';
import Image from 'next/image';

const Page = () => {
  return (
    <section className="bg-primary">
        <nav className="w-full h-[5em] p-5 flex items-center ">
          <Image src={leftArrow} alt='left-arrow' />
          <p className='text-white font-bold text-xl'>Mental Score</p>
        </nav>
        <div className="font-bold text-center my-10 mx-auto text-white">
          <p className="text-[5em]">89</p>
          <p>Mentally Stable</p>
        </div>
        <div className="w-full mx-auto max-w-[40em] bg-white h-[30em] rounded-3xl p-7 md:p-10">
          <div className="flex font-bold items-center justify-between w-full">
            <p>Score History</p>
            <p>See all</p>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <div className="w-full flex items-center gap-3 justify-between p-3 bg-[#ADD8E6] h-[5em] rounded-2xl">
              <div className='flex items-center gap-3'>
                <div className="h-full text-center p-1 text-md w-[3.5em] rounded-2xl bg-white">
                  <p className="text-[#7E6666] text-sm font-semibold">SEP</p>
                  <p className="font-bold -m-0">13</p>
                </div>
                <div>
                  <p className="font-semibold">Anxious, Depressed</p>
                  <p className="text-[#785858] font-semibold text-sm">Do 20m Breathing.</p>
                </div>
              </div>
              {/* <CircularProgressBar percentage={40} /> */}
            </div>
            <div className="w-full flex items-center gap-3 justify-between p-3 bg-[#ADD8E6] h-[5em] rounded-2xl">
              <div className='flex items-center gap-3'>
                <div className="h-full text-center p-1 text-md w-[3.5em] rounded-2xl bg-white">
                  <p className="text-[#7E6666] text-sm font-semibold">SEP</p>
                  <p className="font-bold -m-0">13</p>
                </div>
                <div>
                  <p className="font-semibold">Anxious, Depressed</p>
                  <p className="text-[#785858] font-semibold text-sm">Do 20m Breathing.</p>
                </div>
              </div>
              {/* <CircularProgressBar percentage={40} /> */}
            </div>
            <div className="w-full flex items-center gap-3 justify-between p-3 bg-[#ADD8E6] h-[5em] rounded-2xl">
              <div className='flex items-center gap-3'>
                <div className="h-full text-center p-1 text-md w-[3.5em] rounded-2xl bg-white">
                  <p className="text-[#7E6666] text-sm font-semibold">SEP</p>
                  <p className="font-bold -m-0">13</p>
                </div>
                <div>
                  <p className="font-semibold">Anxious, Depressed</p>
                  <p className="text-[#785858] font-semibold text-sm">Do 20m Breathing.</p>
                </div>
              </div>
              {/* <CircularProgressBar percentage={40} /> */}
            </div>
          </div>
        </div>
        {/* <div className="w-full absolute bg-primary">
            <div className="w-[15em] md:w-[20em] fixed top-[-20%] right-[-5em] h-[15em] md:h-[20em] rounded-full bg-[#045481]"></div>
            <div className="w-[15em] md:w-[20em] fixed top-[25%] left-[-8em] h-[15em] md:h-[20em] rounded-full bg-[#045481]"></div>
            <div className="w-[15em] md:w-[20em] fixed top-[80%] right-[-5em] h-[15em] md:h-[20em] top rounded-full bg-[#045481]"></div>
        </div> */}
    </section>
  )
}

export default Page