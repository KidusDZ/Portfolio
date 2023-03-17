import React from 'react';
import Image from './Image';
import insta from '../assets/insta.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import gmail from '../assets/gmail.png';
import pc from '../assets/astr.gif';
import animated from '../assets/flower.mp4';
import money from '../assets/money.png';

export default function Header() {
  return (
    <div className='flex'>
      <div className='flex-col items-center justify-center top-32 relative  w-full   font-text'>
        <div className='flex-col  relative w-screen'>
          <div className='name text justify-center flex  text-6xl'>
            Kidus Dawit
          </div>
          <div className='flex justify-center text-2xl m-4 text-center text-gray-400'>
            Developer / Freelancer / Financial Analyst.
          </div>
          <div className=' flex justify-center'>
            <p className=' text-center text-gray-400 w-64'>
              Wagwan man whats up with you i am having fun wanna join?
              We live life to the fullest.
            </p>
          </div>
          <div className='flex justify-center m-0 p-0'>
            <a href=''>
              <img
                src={gmail}
                className='w-12 h-12 rounded-full shadow-2xl transition ease-in-out delay-0 hover:animate-none 
         hover:-translate-y-1 hover:scale-125 m-2'
              />
            </a>
            <a href=''>
              <img
                src={insta}
                className='w-12 h-12 rounded-full shadow-2xl transition ease-in-out delay-0 hover:animate-none 
         hover:-translate-y-1 hover:scale-125 m-2'
              />
            </a>
            <a href=''>
              {' '}
              <img
                src={telegram}
                className='w-12 h-12 rounded-full shadow-2xl transition ease-in-out delay-0 hover:animate-none 
         hover:-translate-y-1 hover:scale-125 m-2'
              />
            </a>
            <a href=''>
              <img
                src={twitter}
                className='w-12 h-12 rounded-full shadow-2xl transition ease-in-out delay-0 hover:animate-none 
         hover:-translate-y-1 hover:scale-125 m-2'
              />
            </a>
            <a href=''>
              <img
                src={linkedin}
                className='w-12 h-12 rounded-full shadow-2xl transition ease-in-out delay-0 hover:animate-none 
         hover:-translate-y-1 hover:scale-125 m-2'
              />
            </a>
          </div>
        </div>
        <div className=' justify-center relative flex'>
          <div className='glass overflow-hidden rounded-full bg-gradient-to-b from-gray-400 m-10'>
            <Image />
          </div>
        </div>
        <div className=' '>
          <div className='float md:flex hidden'>
            <img
              className=' w-80  absolute top-20 right-20 h-64 rounded-3xl overflow-hidden  items-center'
              src={money}
            />
          </div>
          <div className='float1'>
            <img
              className=' w-80 md:flex hidden absolute bottom-20 left-20 h-68 rounded-3xl overflow-hidden  items-center'
              src={pc}
            />
          </div>
        </div>
      </div>
      {/* 
      <div className='glass z-[1]'>
        <video
          className=' w-auto h-auto  '
          loop
          autoPlay
          muted
          playsInline
          src={animated}
          type='video/mp4'
        />
      </div> */}
    </div>
  );
}
