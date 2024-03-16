import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUsers, deleteUser } from '../assets/features/Userdetails';
import CustomModal from './CustomModel';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { HiDotsHorizontal } from "react-icons/hi";
import { RiEditLine } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight, FaRegTrashAlt } from 'react-icons/fa';

function Services() {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(showUsers());
    }, [dispatch]);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-4 text-center">Services</h1>
            <div className='flex justify-end flex-row'>
                <Link to="/addservices" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 flex items-center">
                    Add Services <IoIosAddCircleOutline size={24} className="ml-2" />
                </Link>
            </div>
            {loading && (<div className="flex items-center justify-center mt-10"><div className="w-6 h-6 mr-3 border-t-2 border-b-2 border-gray-500 rounded-full animate-spin"></div><p className="text-secondary">Loading...</p></div>)}
         
            {error && (<p className="text-center text-red-500 mt-3"><span className="font-bold">Error:</span> {error}</p>)}
            <ToastContainer /> {/* ToastContainer for displaying notifications */}

{users.length === 0 ? (
  <div className=" flex justify-center h-full mt-44">
    <p className='text-3xl text-center'> Please add services...</p>
  </div>
) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
                {currentUsers.map(user => (
                    <div key={user.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img src={user.image} className="w-full h-64 object-cover" alt={user.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{user.name}</div>
                            <p className="text-gray-700 text-base"><strong>Description:</strong> {user.description}</p>
                            <p className="text-gray-700 text-base"><strong>Charges:</strong> ${user.charges}</p>
                            <p className="text-gray-700 text-base"><strong>Category:</strong> {user.category}</p>
                        </div>
                        <div className="py-4 flex justify-around">
                            <button type="button" className="text-[#00008B] border-2 border-[#00008B] hover:text-white rounded-full p-2 mr-2 hover:bg-[#00008B] focus:outline-none" onClick={() => setSelectedUserId(user.id)} > <HiDotsHorizontal size={20} /> </button>
                            <Link to={`/edit/${user.id}`} className="text-[#00008B] border-2 border-[#00008B] hover:text-white rounded-full p-2 mr-2 hover:bg-[#00008B] focus:outline-none"> <RiEditLine size={22} /></Link>
                            <button onClick={() => dispatch(deleteUser(user.id))} className="text-[#00008B] border-2 border-[#00008B] hover:text-white rounded-full p-2 hover:bg-[#00008B] focus:outline-none"> <FaRegTrashAlt size={20} /></button>
                        </div>
                    </div>
                ))}
            </div>
)}
 
 {/* Toast Container for notifications */}
 {/* <ToastContainer /> */}

            {/* Pagination */}
            <div className="flex justify-center mt-10 ">
                <button
                    className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    onClick={() => setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft />
                </button>
                {Array.from({ length: Math.ceil(users.length / postsPerPage) }, (_, i) => (
                    <button
                        key={i}
                        className={`mx-1 px-3 py-1 ${currentPage === i + 1 ? 'bg-[#00008B] text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
                            } rounded-lg hover:bg-blue-600 focus:outline-none`}
                        onClick={() => paginate(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    onClick={() =>
                        setCurrentPage(currentPage === Math.ceil(users.length / postsPerPage) ? currentPage : currentPage + 1)
                    }
                    disabled={currentPage === Math.ceil(users.length / postsPerPage)}
                >
                    <FaChevronRight />
                </button>
            </div>
            {/* Render CustomModal outside the loop */}
            {selectedUserId && <CustomModal id={selectedUserId} setShowPopup={setSelectedUserId} />}
        </div>
    );
}

export default Services;
