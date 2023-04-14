/** ****************************************
 * Project: bookstore
 * File: BookList.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Remove from './Buttons/Remove';
import { fetchBooks } from '../redux/books/bookslice';

function BookList() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="bookList container">
      {books.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <div className="action-btn">
            <button type="button">Comment</button>
            <button type="button">Edit</button>
            <Remove bookId={book.item_id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
