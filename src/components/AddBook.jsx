/** ****************************************
 * Project: bookstore
 * File: AddBook.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/bookslice';

function AddBook() {
  const { books } = useSelector((state) => state.books);
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
      dispatch(addBook({
        id: `${books.length + 1}`,
        title: bookName,
        author,
        category: 'Nonfiction',
      }));
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
