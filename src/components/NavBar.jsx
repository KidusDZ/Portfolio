import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function NavBar() {
  const [nav1, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav1);
  };

  return (
    <div className='  flex justify-around h-20 bg-[#ECF0E5] dark:bg-[#111827] w-full items-center bg-opacity-95 fixed z-10'>
      <a href='/' className='kidus'>
        KiDUS
      </a>
      <nav className='nav '>
        <ul className='hidden gap-20 md:flex'>
          <li className='li'>
            <a href='#home'>Home</a>
          </li>
          <li className='li'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='li'>
            <a href='/portfolio'>Portfolio</a>
          </li>
          <li className='li'>
            <a href='/education'>Education</a>
          </li>
        </ul>
      </nav>
      <div className=''>
        <button className='buton_nav'>Resume</button>
      </div>
      <div
        className='right-4 top-4 m-4 text-2xl cursor-pointer flex  md:hidden'
        onClick={handleNav}>
        {!nav1 ? <AiOutlineClose size={25} /> : <GiHamburgerMenu />}
      </div>
      <div
        className={
          !nav1
            ? 'fixed left-0 top-0 w-[60%] md:hidden bg-[#FDEFE8] h-full border-r border-red-300 ease-in-out duration-500 '
            : 'ease-in-out duration-500 fixed hidden'
        }>
        <a href='/' className='kidus p-2 pt-6'>
          KiDUS
        </a>
        <ul className='pt-20 text-[#DCAD95] uppercase'>
          <li className='li p-4'>
            <a href='/home'>Home</a>
          </li>
          <li className='li p-4'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='li p-4'>
            <a href='/portfolio'>Portfolio</a>
          </li>
          <li className='li p-4'>
            <a href='/education'>Education</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
