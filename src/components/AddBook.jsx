/** ****************************************
 * Project: bookstore
 * File: AddBook.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addNewBook, addBook } from '../redux/books/bookslice';

function AddBook() {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const handleBookName = (e) => {
    setBookName(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (bookName.trim() && author.trim()) {
      const newBookDetails = {
        author,
        title: bookName,
        category: 'Fiction',
        item_id: uuid(),
      };
      dispatch(addBook(newBookDetails));
      dispatch(addNewBook(newBookDetails));
      setAuthor('');
      setBookName('');
    }
  };
  return (
    <div>
      <h2>Add book</h2>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="add book name" value={bookName} onChange={handleBookName} required />
        <input type="text" placeholder="add author of book" value={author} onChange={handleAuthor} required />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default AddBook;
