import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shipmentId: '',
  data: null,
  isLoading: false,
  error: '',
};

export const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    openLoader: (state) => {
      state.isLoading = true;
    },
    fetchData: (state, action) => {
      state.data = action.payload;
      state.error = '';
    },
    catchError: (state, action) => {
      state.error = action.payload.message;
    },
    closeLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const shipmentReducer = shipmentSlice.reducer;
