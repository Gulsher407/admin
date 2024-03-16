import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../assets/features/Userdetails';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/images/swirl marketing logo.png';

function AddServices() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', description: '', category: '', charges: '', image: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
         await dispatch(createUser(formData));
      toast.success('Form submitted successfully!');
      navigate('/services');
    } catch (error) {
      toast.error('Error submitting the form. Please try again.');
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
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="charges" className="block text-gray-700 text-sm font-bold mb-2">Charges</label>
            <input
              type="number"
              id="charges"
              name="charges"
              value={formData.charges}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {formData.image && (
              <div className="mt-3">
                <img src={formData.image} alt="Preview" className="object-contain h-40 w-full my-2" />
              </div>
            )}

          <button
            type="submit"
            disabled={!formData.name || !formData.description || !formData.category || !formData.charges || !formData.image}
            className={`bg-blue-500 ${(!formData.name || !formData.description || !formData.category || !formData.charges || !formData.image) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} w-full rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline`}
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddServices;
