import React from 'react';
import icon1 from '../assets/ICON1.png';
import { DiReact } from 'react-icons/di';
import html from '../assets/html.gif';
import js from '../assets/js.png';
import css from '../assets/css.gif';
import tail from '../assets/tail.png';
import react from '../assets/react.gif';
import bump from '../assets/shake.png';
import prog from '../assets/prog.png';
import fin from '../assets/fin.png';

export default function Skills() {
  return (
    <div className='flex-col mt-72'>
      <div className=' font-text text-[#DCAD95] text-4xl justify-center flex'>
        How Can We Work Together?
      </div>
      <div className=' flex justify-center'>
        <img className=' w-52 rounded-full h-52' src={bump} />
      </div>
      <div className='flex justify-center px-44  relative text-center '>
        <div className=' px-44 '>
          {' '}
          Failed to load video file: Can not access file at
          'dribbble.com'. Please verify the URL or try downloading the
          file to your device, and upload it from there. If you
          recorded the video on iPhone, read our Tips how to process
          iPhone videos. If the problem persists, contact
          support@unscreen.com.
        </div>
      </div>
      {/* CARDS-CONTAINER */}
      <div className='m-10 md:flex flex-wrap z-[1] justify-evenly'>
        {/* CARD-1 */}
        <div
          className='glass transition ease-in-out delay-0 hover:animate-none 
         hover:-translate-y-1 hover:scale-100 hover:bg-[#915FC6] duration-300 
        bg-white  flex justify-center rounded-2xl shadow-sm  hover:border-0 hover:shadow-2xl 
        mb-10 bg-opacity-80 h-48 w-40 hover:h-auto hover:w-auto m-4'>
          <div className=' flex-col '>
            <div className=' flex justify-center'>
              <div className='flex p-10 m-7  w-40  h-40'>
                <img className='' src={icon1} />
              </div>
            </div>
            <div className=' text-center font-logo text-black'>
              WEB DESIGN
              <div className='opacity-0 hover:opacity-100'>
                <div className='flex justify-between '>
                  <img className='w-28 h-28' src={html} />
                  <img className='w-28 h-28' src={css} />
                  <img className='w-28 h-28' src={js} />
                </div>
                <div className='flex justify-between rounded-md '>
                  <img
                    className='w-40 h-28 animate-pulse'
                    src={tail}
                  />
                  <img className='w-28 h-28' src={react} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD-2 */}
        <div
          className='glass transition ease-in-out delay-0 hover:animate-none 
         hover:-translate-y-1 hover:scale-100 hover:bg-[#915FC6] duration-300 
        bg-white  flex justify-center rounded-2xl shadow-sm  hover:border-0 hover:shadow-2xl 
        mb-10 bg-opacity-80 h-48 w-40 hover:h-auto hover:w-auto m-4'>
          <div className=' flex-col '>
            <div className=' flex justify-center'>
              <div className='flex  m-7 w-40  h-40'>
                <img className='' src={prog} />
              </div>
            </div>
            <div className=' text-center font-logo text-black'>
              PROGRAMING
              <div className='opacity-0 hover:opacity-100'>
                <div className='flex justify-between '>
                  <img className='w-28 h-28' src={html} />
                  <img className='w-28 h-28' src={css} />
                  <img className='w-28 h-28' src={js} />
                </div>
                <div className='flex justify-between rounded-md '>
                  <img
                    className='w-40 h-28 animate-pulse'
                    src={tail}
                  />
                  <img className='w-28 h-28' src={react} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD-3 */}
        <div
          className='glass transition ease-in-out delay-0 hover:animate-none 
         hover:-translate-y-1 hover:scale-100 hover:bg-[#915FC6] duration-300 
        bg-white  flex justify-center rounded-2xl shadow-sm  hover:border-0 hover:shadow-2xl 
        mb-10 bg-opacity-80 h-48 w-40 hover:h-auto hover:w-auto m-4'>
          <div className=' flex-col '>
            <div className=' flex justify-center'>
              <div className='flex m-7 w-40  h-40'>
                <img className='' src={fin} />
              </div>
            </div>
            <div className=' text-center font-logo text-black'>
              FMVA
              <div className='opacity-0 hover:opacity-100'>
                <div className='flex justify-between '>
                  <img className='w-28 h-28' src={html} />
                  <img className='w-28 h-28' src={css} />
                  <img className='w-28 h-28' src={js} />
                </div>
                <div className='flex justify-between rounded-md '>
                  <img
                    className='w-40 h-28 animate-pulse'
                    src={tail}
                  />
                  <img className='w-28 h-28' src={react} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*CONTAINER END */}
    </div>
  );
}
