import React, { useState } from 'react';
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { deleteService } from './ServicesSlice';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import EditService from './EditService';
import { useNavigate } from 'react-router-dom';

function Services() {
    const services = useSelector(state => state.serviceStore.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [editServiceId, setEditServiceId] = useState(null);

    const handleDelete = (id) => {
        dispatch(deleteService(id));
    };

    const handleEdit = (id) => {
        setEditServiceId(id);
    };

    const handleCloseEdit = () => {
        setEditServiceId(null);
    };

    const handleAdd = () => {
        navigate("/addServices")
    };

    return (
        <div className='container mx-auto '>
            <div className='flex  justify-center items-center text-[#00008B] my-5'>
                <h1 className='text-3xl font-bold px-1'>Services
                </h1>
                <MdOutlineMiscellaneousServices size={30} />

            </div>

            <div className="flex justify-end my-4">
                <div className='bg-green-700 flex text-white rounded-full px-3 py-2 justify-center items-center cursor-pointer ' onClick={handleAdd} >
                    <button className="px-1 text-xl" >
                        Add Services
                    </button>
                    <MdOutlineMiscellaneousServices size={20} />
                </div>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-10 justify-center mx-10 mb-5">
                {services && services.map((service) => (
                    <div key={service.id} className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden relative">
                        <div className="px-4 py-2 h-[350px] border-2 hover:border-[#00008B] duration-1000 ">

                            <div className='h-[200px]  bg-[#00008B] rounded-full' >
                                <img src={service.image} alt="" srcset="" />
                            </div>
                            <p className="text-lg font-semibold mb-2 text-center">{service.Name}</p>
                            <p className="text-base text-gray-600 mb-4">{service.Description}</p>
                            <p className="text-lg font-semibold">{service.Category}</p>

                            <div className="flex justify-end">
                                <p className="text-lg font-semibold">${service.Charges}</p>
                            </div>
                        </div>

                        <div className=" right-0 flex space-x-4 m-2">
                            <button className="bg-red-700 rounded-full px-3 py-1 text-white" onClick={() => handleDelete(service.id)}>
                                <RiDeleteBinLine size={22} />
                            </button>
                            <button className="bg-blue-700 rounded-full px-3 py-1 text-white" onClick={() => handleEdit(service.id)}>
                                <RiEdit2Line size={22} />
                            </button>

                        </div>
                    </div>
                ))}
            </div>
            {editServiceId && <EditService serviceId={editServiceId} onClose={handleCloseEdit} />}
        </div>
    );
}

export default Services;
