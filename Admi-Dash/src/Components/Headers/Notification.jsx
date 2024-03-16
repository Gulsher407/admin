import React, { useState, useEffect, useRef } from 'react';

const Notification = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const [visibleNotifications, setVisibleNotifications] = useState(4); // Number of notifications initially visible

  const toggleDropdown = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const notifications = [
    "You have received a new message.",
    "You have a meeting scheduled for tomorrow.",
    "Your order has been shipped.",
    "Your payment was successful.",
    "A new friend request has been received.",
    "Your subscription has expired. Renew now!",
    "Congratulations! You've earned a reward.",
    "Your account password has been updated.",
    "You've been mentioned in a comment.",
    "New updates are available for download.",
    "You have an upcoming event reminder.",
    "You've been tagged in a photo.",
    "Your profile has been viewed by 10 people.",
    "You've reached a new milestone.",
    "A new article has been published in your favorite magazine.",
    "Your flight has been delayed.",
    "A new job opportunity is available.",
    "Your favorite product is now on sale.",
  ];

  useEffect(() => {
    setShowReadMore(notifications.length > visibleNotifications && isOpen);
  }, [isOpen, notifications.length, visibleNotifications]);

  return (
    <div className="relative inline-block justify-center" ref={dropdownRef}>
      <div className="relative">
        <button
          type="button"
          className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none"
          onClick={toggleDropdown}
        >
          {icon}
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-[#00008b] bg-white border-2  border-white rounded-full top-0 -end-2 hover:text-white hover:bg-[#00008b] hover:rotate-45 ">{notifications.length} </div>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white border  overflow-auto max-h-[300px] border-gray-200 rounded-md shadow-lg z-10">
          {notifications.slice(0, visibleNotifications).map((notification, index) => (
            <div key={index} className="py-3 px-4 text-sm text-gray-700 hover:bg-[#00008b] cursor-pointer hover:text-white">
              {notification}
            </div>
          ))}
          
          {showReadMore && (
            <button
              className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
              onClick={() => setVisibleNotifications(notifications.length)}
            >
              View All   
            </button>
          )}
    
        </div>
      )}
    </div>
  );
};

export default Notification;
