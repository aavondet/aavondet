import React from 'react';
import Avatar from '../../public/avatar.png';

const Home = () => {
  return (
    <div className='home-container'>
      <img src={Avatar} className='home-avatar'></img>
      <p className='home-paragraph'>
        Hello!<br/>
        My name is Arnaud, I’m an undergrad<br/>
        at Carnegie Mellon University<br/>
        studying Mathematics and Computer<br/>
        Science.
      </p>
    </div>
  );
};

export default Home;
