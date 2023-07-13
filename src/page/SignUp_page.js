import React from 'react';
import FixedBottomNavigation from "../component/Nav";
import Signup from '../component/Signup';
import Header from '../component/Header';

function SignUp_page() {
  return (
    <div>
    <Header />
    <Signup />
    <FixedBottomNavigation/>    
    </div>
  );
}

export default SignUp_page;
