import React from 'react';
import { useSelector } from 'react-redux';
import { RxCrossCircled } from "react-icons/rx";

const CustomModal = ({ id, setShowPopup }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.find((user) => user.id === id);

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <h1 className='text-center text-3xl py-2 text-orange-500'>Service Details</h1>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 flex flex-col sm:flex-row">
            <div className="sm:w-1/2">
              <img src={singleUser.image} alt={singleUser.name} className="h-44 rounded-xl w-full sm:max-h-full" />
            </div>
            <div className="sm:w-1/2 sm:pl-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Name: {singleUser.name}</h3>
              <div className="mt-2">
                <p className="text-gray-500 mt-4">Description: {singleUser.description}</p>
                <p className="text-gray-500 py-2">Category: {singleUser.category}</p>
                <p className="text-lg py-2 text-gray-500">Charges: ${singleUser.charges}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 border-2 border-[#00008B] text-[#00008B] text-base font-medium hover:text-white hover:bg-[#00008B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowPopup(false)}>
              <RxCrossCircled size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
