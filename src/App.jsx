import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import pc from './assets/astr.gif';
import money from './assets/money.png';
import Portfolio from './components/Portfolio';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='  bg-[#ECF0E9] dark:bg-[#111827] overflow-hidden'>
        <NavBar />
        {
          <div className=''>
            <div className=' relative w-full items-center'>
              <Header />
            </div>
          </div>
        }
        {/* <div className=''>
          <a onClick={() => setDarkMode(!darkMode)} className=''>
            Resume
          </a>
        </div> */}

        <div className='' id='skills'>
          <Skills />
        </div>
        <div>
          <Portfolio />
        </div>
        <div className=''>
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
