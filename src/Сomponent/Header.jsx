// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import { signInWithGoogle } from '../../src/auth.js';

function Header() {
  const handleSignInClick = () => {
    signInWithGoogle();
  };

  return (
    <>
      <div className='header'>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <div  className='main'>Головна</div>
        </Link>
        <Link style={{ color: 'inherit', textDecoration: 'none' }}>
          <div onClick={handleSignInClick} className='auth'>Авторизацiя</div>
        </Link>
        <Link to="/cabinet" style={{ color: 'inherit', textDecoration: 'none' }}>
          <div className='cabinet'>Кабiнет</div>
        </Link>
      </div>
    </>
  );
}

export default Header;
