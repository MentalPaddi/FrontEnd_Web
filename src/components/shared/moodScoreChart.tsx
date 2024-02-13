import { moodScore } from '@/constants'
import React from 'react'

const MoodScoreChart = () => {
  return (
    <div className='bg-white p-5 rounded-xl w-full max-w-[26em] mx-auto mt-5'>
        <div className='flex justify-between'>
            <div className='flex gap-5'>
              <div className='flex items-center gap-2'>
                  <div className='h-2 w-2 bg-[#9BB167] rounded-full'></div>
                  <p>Positive</p>
              </div>
              <div className='flex items-center gap-2'>
                  <div className='h-2 w-2 bg-[#ED7E1C] rounded-full'></div>
                  <p>Negative</p>
              </div>
            </div>
            <div>
              <p>Monthly</p>
            </div>
        </div>

        <div className='flex gap-3 mt-7'>
          {moodScore.map(({mode, height}, i) =>(
            <div key={i} className='w-3.5 flex items-end rounded-full h-60 bg-[#E5EAD7]'>
                <div className={`h-[${height}%] ${mode === 'good' ? 'bg-[#9BB167]' : 'bg-[#ED7E1C]'} rounded-full w-full`}></div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MoodScoreChart