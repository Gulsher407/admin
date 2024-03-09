import React from 'react';
import { MdDashboardCustomize, MdNotifications, MdSettings } from 'react-icons/md';
import Header from './Headers/Header';
import Avatar from './Headers/Avatar';
import Userdetails from './Headers/Userdetails';

function Navbar() {
  return (
    <div className='bg-[#00008B] text-white h-16 md:flex md:justify-around items-center mx-auto'>
      <div>
        <h1 className='text-2xl font-serif'>Swirl Marketing</h1>
      </div>
      {/* Dashboard */}
      <div className='flex ' >
        <Header title="Dashboard" icon={<MdDashboardCustomize size={20} />} 
        li1="Add New Services" li2="Service List"  path="/" 
        path1="/addServices"  path2="/servicelist" />
        <Header title="Services" icon={<MdNotifications size={20} />} path="/services" />
        <Header title="User" 
        icon={<MdSettings size={20} />} li1="Log In" li2="Register" li3="Forget Password" path="/user" 
        path1="/login"  path2="/signup"  path3="/forgetpass"/>
      </div>

      <div className='flex  flex-row space-x-10'>
        <Avatar />
        <Avatar />
        <Userdetails />
      </div>
    </div>
  );
}

export default Navbar;
