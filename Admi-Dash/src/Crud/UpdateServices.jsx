import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from '../assets/features/Userdetails';
import logo from '../assets/images/swirl marketing logo.png';


const UpdateServices = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({
    name: '',
    description: '',
    category: '',
    charges: '',
    image: ''
  });

  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    if (id && users.length > 0) {
      const singleUser = users.find((user) => user.id === id);
      setUpdateData(singleUser);
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/services");
  };

  return (
    <div className="mx-auto mt-10 w-full md:w-2/3 lg:w-1/2">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-3xl font-bold mb-5 text-center">Update Service</h1>
      <hr className="w-full h-2 text-blue-[#00008B]" />
      <div className="bg-[#00008B] flex justify-center rounded-md mb-2">
        <img src={logo} alt="Logo" className="mb-5 h-[280px] w-[400px]" />
      </div>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.name}
              onChange={newData}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.description}
              onChange={newData}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.category}
              onChange={newData}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="charges" className="block text-gray-700 text-sm font-bold mb-2">Charges</label>
            <input
              type="number"
              id="charges"
              name="charges"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.charges}
              onChange={newData}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={updateData.image}
              onChange={newData}
            />
            {updateData.image && (
              <div className="mt-3">
                <img src={updateData.image} alt="Preview" className="object-contain h-40 w-full" />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Service
          </button>
        </form>

      </div>
    </div>
  );
};

export default UpdateServices;
