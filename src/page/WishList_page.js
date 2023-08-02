import React from 'react';
import FixedBottomNavigation from "../component/BottomNav";
import Header from '../component/Header';
import WishList from '../component/WishList';
import '../styles/WishList.css';

function WishList_page() {
  return (
    <div>
    <Header />
    <WishList />
    <FixedBottomNavigation />
    </div>
  );
}

export default WishList_page;
