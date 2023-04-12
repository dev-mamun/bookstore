/** ****************************************
 * Project: bookstore
 * File: BookSlice.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state) => {
      state.books.push({
        title: 'Breaking Bad',
        author: 'Vince Gilligan',
      });
    },
    removeBook: (state) => {
      state.books.filter((book) => book.id < 4);
    },
  },
});
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
