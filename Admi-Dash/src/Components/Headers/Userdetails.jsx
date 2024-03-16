import React, { useState } from 'react';
import Gulsher from '../../assets/Gulsher.jpg';
import { FaUserCircle, FaCog, FaMoneyBill, FaSignOutAlt } from 'react-icons/fa';

function Userdetails() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const iconMapping = {
    Account: FaUserCircle,
    Settings: FaCog,
    Billing: FaMoneyBill,
  };

  const DropdownIcon = ({ name }) => {
    const Icon = iconMapping[name];
    return Icon ? <Icon className="inline-block mr-2" /> : null;
  };

  return (
    <div className="relative">
      <button
        id="dropdownInformationButton"
        onClick={toggleDropdown}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
        type="button"
      >
        Gulsher Ali
        <svg
          className={`w-2 h-2 ml-2 transition-transform duration-300 transform ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdownInformation"
        onMouseLeave={closeDropdown}
        className={`absolute top-full left-auto right-0 z-10 mt-5 border-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700 dark:divide-gray-600 ${
          isDropdownOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="flex space-x-2 text-[14px]">
            <div className="">
              <img src={Gulsher} alt="" srcSet="" className="h-8 w-8 rounded-full" />
            </div>
            <div>
              <h1> Gulsher Ali</h1>
              <div className="font-medium truncate">syedgulshera2@gmail.com</div>
            </div>
          </div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
          <li>
            <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors">
              <DropdownIcon name="Account" /> Account
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors">
              <DropdownIcon name="Settings" /> Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition-colors">
              <DropdownIcon name="Billing" /> Billing
            </a>
          </li>
        </ul>
        <div className="h-[1px] bg-[#00008B]" />
        <div className="py-2">
          <a href="#" className="block px-4 py-2  text-lg text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white transition-colors">
            <FaSignOutAlt className="inline-block mr-2" /> Sign out
          </a>
        </div>
      </div>
    </div>
  );
}

export default Userdetails;
