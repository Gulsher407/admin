import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addService } from './ServicesSlice';
import logo from '../assets/images/swirl marketing logo.png';
import { useNavigate } from 'react-router-dom';

export default function ServicesForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: '',
    Description: '',
    Category: '',
    Charges: '',
    Image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the addService action with the correct payload
    dispatch(addService(formData));
    navigate('/services');
    setFormData({
      Name: '',
      Description: '',
      Category: '',
      Charges: '',
      Image: null,
    });
  };

  const handleChange = (e) => {
    if (e.target.id === 'Image') {
      setFormData({ ...formData, Image: e.target.files[0] });
    } else {
      const { id, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [id]: id === 'Charges' ? parseFloat(value) : value,
      }));
    }
  };

  return (
    <div className="mx-auto mt-10 w-full md:w-2/3 lg:w-1/2">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-5 text-center">Add New Service</h1>
        <hr className="w-full h-2 text-blue-[#00008B]" />
        <div className="bg-[#00008B] flex justify-center rounded-md mb-2">
          <img src={logo} alt="Logo" className="mb-5 h-[280px] w-[400px]" />
        </div>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mb-4">
            <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">Service Name</label>
            <input
              required
              id="Name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Description" className="block text-gray-700 text-sm font-bold mb-2">Service Description</label>
            <input
              required
              id="Description"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Category" className="block text-gray-700 text-sm font-bold mb-2">Service Category</label>
            <input
              required
              id="Category"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Category}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Charges" className="block text-gray-700 text-sm font-bold mb-2">Service Charges</label>
            <input
              required
              id="Charges"
              type="number"
              step="0.01"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.Charges}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="Image" className="block text-black text-sm font-bold mb-2">Service Image</label>
            <input
              id="Image"
              type="file"
              accept="image/*"
              className="shadow appearance-none border
               rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={!formData.Name || !formData.Description || !formData.Category || !formData.Charges || !formData.Image}
            className={`bg-blue-500 ${(!formData.Name || !formData.Description || !formData.Category || !formData.Charges || !formData.Image) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} w-full rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline`}
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
}
