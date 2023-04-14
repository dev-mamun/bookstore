/** ****************************************
 * Project: bookstore
 * File: BookList.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { useSelector } from 'react-redux';
import Remove from './Buttons/Remove';

function BookList() {
  const { books } = useSelector((state) => state.books);
  return (
    <div className="bookList container">
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <div className="action-btn">
            <button type="button">Comment</button>
            <button type="button">Edit</button>
            <Remove bookId={book.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
