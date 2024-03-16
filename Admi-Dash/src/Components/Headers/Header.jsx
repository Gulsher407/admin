import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ title, icon, li1, li2, li3, path ,path1,path2,path3}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => {
    setIsDropdownOpen(true);
  
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative  ">
      <button
        id="dropdownHoverButton"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className="text-white cursor-pointer rounded-lg px-5 py-2.5 text-center inline-flex items-center hover:border-white border-transparent  border-t-2   hover:translate-y-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
      >
        <Link to={path} className="flex space-x-2">
         <p className=''> {title} </p>  {icon}
        </Link>
      </button>

    
      {li1 || li2 || li3 ? (
        <div
          id="dropdownHover"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className={`absolute top-full left-0 z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white mt-1 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            {li1 && (
              <li>
                <Link to={path1} className="block px-4 py-2 rounded-lg
                 hover:bg-gray-100 text-[#00008B] dark:hover:bg-gray-600 dark:hover:text-white">{li1}</Link>
              </li>
            )}
            {li2 && (
              <li>
                <Link to={path2} className="block px-4 py-2  text-[#00008B]  hover:bg-blue-100 dark:hover:bg-gray-600 dark:hover:text-white">{li2}</Link>
              </li>
            )}
            {li3 && (
              <li>
                <Link to={path3} className="block px-4 py-2 text-[#00008B] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{li3}</Link>
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
