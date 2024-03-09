import { createSlice } from '@reduxjs/toolkit';

let nextServiceId = 1;

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    data: [],
  },
  reducers: {
    addService: (state, action) => {
      const { Name, Description, Category, Charges, Image } = action.payload;
      state.data.push({ id: nextServiceId++, Name, Description, Category, Charges, Image });
    },
    deleteService: (state, action) => {
      state.data = state.data.filter(service => service.id !== action.payload);
    },
    editService: (state, action) => {
      const { id, updatedService } = action.payload;
      const index = state.data.findIndex(service => service.id === id);
      if (index !== -1) {
        state.data[index] = { ...updatedService, id };
      }
    },
  },
});

export const { addService, deleteService, editService } = servicesSlice.actions;
export default servicesSlice.reducer;
