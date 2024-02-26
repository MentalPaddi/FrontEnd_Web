import React from 'react'

const Page = () => {
  return (
  <section className='bg-[#FEFEFE] p-10 md:p-20'>
    <div className='bg-white shadow-xl rounded-xl p-10'>
      <h1 className='text-[#060619] font-bold text-2xl mb-3'>Contact Us</h1>
      <div>
        <p className='text-[#060619] opacity-65 font-bold'>Address:</p>
        <p className='text-[#060619] opacity-65'>Federal University of Technology, Owerri, Nigeria.</p>

        <p className='text-[#060619] opacity-65 font-bold mt-5'>Email:</p>
        <p className='text-[#060619] opacity-65'>MentalPaddi@gmail.com</p>
        
        <p className='text-[#060619] opacity-65 font-bold mt-5'>Phone:</p>
        <p className='text-[#060619] opacity-65'>09067688802</p>
      </div>
    </div>
</section>
  )
}

export default Page