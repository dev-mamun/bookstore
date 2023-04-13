/** ****************************************
 * Project: bookstore
 * File: BookSlice.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const bookslice = createSlice({
  name: 'books',
  initialState: {
    books: [{
      id: uuid(), title: 'দ্বিখণ্ডিতা', author: 'শারমিন আঞ্জুম', category: 'Fiction',
    }, {
      id: uuid(), title: 'লাইফ অ্যাজ ইট ইজ', author: 'ড. আমিনুল ইসলাম', category: 'Non Fiction',
    }, {
      id: uuid(), title: 'ইংলিশে দুর্বলদের জন্য', author: 'সাইফুল ইসলাম', category: 'Career & Academic Books',
    }],
  },
  reducers: {
    addBook: (state, bookData) => {
      state.books.push(bookData.payload);
    },
    removeBook: (state, bookId) => {
      const index = state.books.findIndex((book) => book.item_id === bookId.payload);
      state.books.splice(index, 1);
    },
  },
});
export const { addBook, removeBook } = bookslice.actions;
export default bookslice.reducer;
