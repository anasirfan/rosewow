import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import productsData from '../../data/products.json';

const initialState = {
  products: productsData.products,
  status: 'idle',
  error: null
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        ...action.payload,
        id: uuidv4(),
        reviews: []
      };
      state.products.push(newProduct);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = {
          ...state.products[index],
          ...action.payload
        };
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    addReview: (state, action) => {
      const { productId, review } = action.payload;
      const product = state.products.find(product => product.id === productId);
      if (product) {
        product.reviews.push({
          ...review,
          id: uuidv4(),
          date: new Date().toISOString().split('T')[0]
        });
      }
    },
    updateStock: (state, action) => {
      const { productId, newStock } = action.payload;
      const product = state.products.find(product => product.id === productId);
      if (product) {
        product.stock = newStock;
      }
    }
  }
});

export const { 
  addProduct, 
  updateProduct, 
  deleteProduct, 
  addReview,
  updateStock
} = productSlice.actions;

export default productSlice.reducer;
