import React from 'react';

function Footer() {
  return (
    <div className="text-center py-4 my-10 text-gray-500 text-sm bottom-0  w-full">
      &copy; {new Date().getFullYear()} Swirl Markting. All rights reserved.
    </div>
  );
}

export default Footer;
