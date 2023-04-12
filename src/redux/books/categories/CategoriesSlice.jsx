/** ****************************************
 * Project: bookstore
 * File: CategoriesSlice.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: 'Under Construction',
  },
  reducers: {
    checkStatus: (state) => state.categories,
  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
