import React, { useState, useEffect } from 'react';
import { MdDashboardCustomize, MdNotifications, MdSettings, MdMenu, MdClose } from 'react-icons/md';
import Header from './Headers/Header';
import Notification from './Headers/Notification'
import Avatar from './Headers/Avatar';
import Userdetails from './Headers/Userdetails';
import { MdMiscellaneousServices } from "react-icons/md";
import Gulsher from '../assets/Gulsher.jpg';
import { Link } from 'react-router-dom';
import { MdCircleNotifications } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar({ Title }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    // Trigger AOS animation when navbar opens or closes
    AOS.refresh();
  };

  return (
    <>
      {/* Medium and Large screen Navbar */}
      <div className={`bg-[#00008B] text-white h-16 md:flex md:justify-around items-center mx-auto ${isSticky ? 'sticky top-0 z-10' : ''} ${isMobile ? 'hidden' : 'block'}`}>
        <div>
          <h1 className='text-2xl font-serif'>{Title}</h1>
        </div>
        {/* Dashboard */}
        <div className='flex'>
          <Header title="Dashboard"
            icon={<MdDashboardCustomize size={20} />}
            li1="Add New Services" li2="Service List" path="/" path1="/addServices" path2="/servicesList" />

          <Header title="Services" icon={<MdMiscellaneousServices size={20} />} path="/services" />
          <Header title="User" icon={<FaUserTie size={20} />} li1="LogIn" li2="Register" li3="Forget Password" path="/user" path1="/login" path2="/signup" path3="/forget-pass" />
        </div>
        <div className='flex  flex-row space-x-10'>
          <Notification icon={<MdCircleNotifications size={26} />} />
          <Avatar icon={<MdSettings size={26} />} />
          <div className='flex space-x-2 items-center'>
            <div className=''>
              <img src={Gulsher} alt="" className='rounded-full h-10 w-10' />
            </div>
            <Userdetails />
          </div>
        </div>
      </div>

      {/* Small screen Navbar */}
      <div className={`bg-[#00008B] text-white h-16 flex justify-between items-center px-4 ${isMobile ? 'block' : 'hidden'}`}>
        <div>
          <h1 className='text-2xl font-serif'>Swirl Marketing</h1>
        </div>

        <div className='flex items-center' >
          {!isNavOpen ? <MdMenu className="cursor-pointer text-2xl" onClick={toggleNav} data-aos="fade-left" /> : <MdClose className="cursor-pointer text-2xl" onClick={toggleNav} data-aos="fade-left" />}
        </div>
      </div>

      {/* Additional div for small screens */}
      <div className={`flex justify-around  bg-[#00008b] ${isMobile ? 'block' : 'hidden'}`}>
        <Notification icon={<MdNotifications size={24} />} />

        <Avatar icon={<MdSettings size={24} />} />
        <div className='flex space-x-2 items-center'>
          <div className=''>
            <img src={Gulsher} alt="" className='rounded-full h-10 w-10' />
          </div>
          <Userdetails />
        </div>
      </div>

      {/* Dropdown for small screen */}
      <div className={`bg-[#00008B] text-white  text-center 
      h-auto px-4 ${isNavOpen ? 'block' : 'hidden'} transition-all duration-1000 ease-in-out`} data-aos="fade-right"  data-aos-easing="linear" >
        <Link to="/" className='block py-2 '>Dashboard</Link>
        <Link to="/services" className='block py-2 '>Services</Link>
        <Link to="/servicesList" className='block py-2 '>Services List</Link>

        <Link to="/user" className='block py-2'>User</Link>
        {isNavOpen && (
          <div>
            <Link to="/login" className='block py-2'>Login</Link>
            <Link to="/signup" className='block py-2'>Register</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
