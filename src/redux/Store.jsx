/** ****************************************
 * Project: bookstore
 * File: Store.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { configureStore } from '@reduxjs/toolkit';
import BookSlice from './books/BookSlice';
import CategoriesSlice from './books/categories/CategoriesSlice';

const store = configureStore({
  reducer: {
    books: BookSlice,
    categories: CategoriesSlice,
  },
});
export default store;
