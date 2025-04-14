import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  orders: [],
  status: 'idle',
  error: null
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const newOrder = {
        ...action.payload,
        id: uuidv4(),
        date: new Date().toISOString(),
        status: 'pending'
      };
      state.orders.push(newOrder);
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const order = state.orders.find(order => order.id === orderId);
      if (order) {
        order.status = status;
      }
    }
  }
});

export const { createOrder, updateOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
