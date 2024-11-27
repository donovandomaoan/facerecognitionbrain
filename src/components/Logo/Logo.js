import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png.png'

const Logo = () => {
    return (
<div className='ma4 mt0'>
    <Tilt>
      <div style={{ height: '100px, 100px', }}>
        <img alt='logo' src={brain}/>
      </div>
    </Tilt>
</div>
    );
}

export default Logo;