import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editService } from './ServicesSlice';
import logo from '../assets/images/swirl marketing logo.png';

export default function EditService({ serviceId, onClose }) {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.serviceStore.data);
    const [formData, setFormData] = useState({
        Name: '',
        Description: '',
        Category: '',
        Charges: '',
        Image: null, // Updated to hold the image file
    });

    useEffect(() => {
        if (serviceId !== null) {
            const editingService = services.find((service) => service.id === serviceId);
            if (editingService) {
                setFormData(editingService);
            }
        }
    }, [serviceId, services]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editService({ id: serviceId, updatedService: formData }));
        setFormData({  // Clear form data after submission
            Name: '',
            Description: '',
            Category: '',
            Charges: '',
            Image: null,
        });
        onClose(); // Close the edit modal
    };

    const handleChange = (e) => {
        if (e.target.id === 'Image') {
            setFormData({ ...formData, Image: e.target.files[0] }); // Update Image to hold the selected file
        } else {
            const { id, value } = e.target;
            setFormData((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        }
    };

    return (
        <div className="mx-auto mt-10 w-full md:w-2/3 lg:w-1/2">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-3xl font-bold mb-5 text-center">Update</h1>
                <div className="bg-[#00008B] flex justify-center rounded-md mb-2">
                    <img src={logo} alt="Logo" className="mb-5 h-[280px] w-[400px]" />
                </div>
                <form onSubmit={handleSubmit} className="mx-auto">
                    <div className="mb-4">
                        <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">Service Name</label>
                        <input required id="Name" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.Name} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Description" className="block text-gray-700 text-sm font-bold mb-2">Service Description</label>
                        <input required id="Description" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.Description} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Category" className="block text-gray-700 text-sm font-bold mb-2">Service Category</label>
                        <input required id="Category" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.Category} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Charges" className="block text-gray-700 text-sm font-bold mb-2">Service Charges</label>
                        <input required id="Charges" type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.Charges} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Image" className="block text-gray-700 text-sm font-bold mb-2">Service Image</label>
                        <input id="Image" type="file" accept="image/*" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 w-full rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}
