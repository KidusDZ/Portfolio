import me from '../assets/me.gif/';

import real from '../assets/real.png'
const Image = () => {
  return (
    <div className='box'>
      <img className='mt-8 hovervid ' src={real}  />
      <img className='vid ' src={me} />
      
    </div>
  );
};

export default Image;
