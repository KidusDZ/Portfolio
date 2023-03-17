import React from 'react';
import animated from '../assets/animated.mp4';
import animated2 from '../assets/animated2.jpg';

export default function Education() {
  return (
    <div className=' flex justify-center'>
      <div className='md:m-20 m-5 w-[770px] h-auto rounded-3xl bg-white justify-center flex'>
        <div className='glass z-[1] flex flex-wrap rounded-3xl w-full     '>
          {/* WRITING */}
          <div className=' rounded-3xl md:my-10 md:p-5 md:border-r-2 border-r-violet-400 text-center rounded-r-none md:w-5/12'>
            <div className=' text-xl font-logo'>EDUCATION</div>
            <div className='m-10 font-text'>
              <span className=' text-violet-500'>
                Computer Science
              </span>
              ,
              <br /> HiLCoE School of Computer Science and Technology,{' '}
              <br />
              2019-PRESENT,
              <br /> GPA- 3.17
            </div>
            <div className='md:m-10 font-text'>
              <span className=' text-violet-500'>
                Financial Modeling and Valuation Analyst
              </span>
              ,
              <br /> Corporate Finance Institute, 2022,
            </div>
          </div>
          {/* VIDEO */}
          <div className='flex  rounded-3xl m-2 md:ml-10 overflow-hidden rounded-l-none'>
            <div className='mt-28 rounded-3xl overflow-hidden'>
              <video
                className=' w-80 h-60 '
                loop
                autoPlay
                muted
                playsInline
                src={animated}
                type='video/mp4'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
