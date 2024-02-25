import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import messageEdit from '@/public/assets/message-edit.svg';
import Link from "next/link";

const JournalStat = [
  {
    day: 'Mon',
    status: 'skipped'
  },
  {
    day: 'Tues',
    status: 'skipped'
  },
  {
    day: 'Wed',
    status: 'positive'
  },
  {
    day: 'Thus',
    status: 'negative'
  },
  {
    day: 'Fri',
    status: 'skipped'
  },
  {
    day: 'Sat',
    status: 'negative'
  },
  {
    day: 'Sun',
    status: 'positive'
  },
]

const Page = () => {
  return (
    <section className='bg-[#906146] pb-20'>
      <div className="p-10 md:p-20">
        <nav className="flex items-center justify-between">
          <Link href='/home'>
            <div className="font-bold flex items-center text-white gap-2 text-2xl">
              <IoIosArrowBack />
              <p>Journal</p>
            </div>
          </Link>
          <div className="p-2 text-white font-semibold w-[4em] text-center border-[1px] rounded-full border-white">
            <p>Feb</p>
          </div>
        </nav>

        <div className="text-white text-center my-20 font-bold">
          <p className="text-9xl">32</p>
          <p className="text-xl font">Journal this month</p>
        </div>
      </div>

      <Link href='/add-journal'>
        <div className="w-[5em] h-[5em] mx-auto relative top-10 flex items-center justify-center rounded-full bg-[#986C54]">
          <Image src={messageEdit} width={30} height={30} alt="message edit" />
        </div>
      </Link>
      <div className="bg-white max-w-[55em] mx-auto text-[#333333] p-10 md:p-20 w-full rounded-t-3xl md:rounded-b-3xl">
        <div className="flex items-center text-xl pt-5 justify-between font-bold">
          <p>Journal Statistics</p>
          <p>See all</p>
        </div>
        <div className="w-full">
          <div className="flex items-center my-10 justify-around">
            {JournalStat.map(({day, status}, i) => (
              <div className="flex flex-col items-center" key={i}>
                <div className={`w-6 h-6 rounded-full ${status==='positive' && 'bg-[#9BB167]'} ${status==='negative' && 'bg-[#ED7E1C]'} ${status==='skipped' && 'bg-[#D9D9D9]'}`}></div>
                <p className="font-semibold text-[#967A7A]">{day}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center my-10 justify-around">
            {JournalStat.map(({day, status}, i) => (
              <div className="flex flex-col items-center" key={i}>
                <div className={`w-6 h-6 rounded-full ${status==='positive' && 'bg-[#9BB167]'} ${status==='negative' && 'bg-[#ED7E1C]'} ${status==='skipped' && 'bg-[#D9D9D9]'}`}></div>
                <p className="font-semibold text-[#967A7A]">{day}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-around max-w-[40em] mx-auto my-10">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full bg-[#D9D9D9]"></div>
            <p className="font-semibold">Skipped</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full bg-[#9BB167]"></div>
            <p className="font-semibold">Positive</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full bg-[#ED7E1C]"></div>
            <p className="font-semibold">Negative</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page