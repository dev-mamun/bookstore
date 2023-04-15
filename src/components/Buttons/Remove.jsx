/** ****************************************
 * Project: bookstore
 * File: Remove.jsx
 * Created: 4/13/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteBook, removeBook } from '../../redux/books/bookslice';

function RemoveBtn({ bookId }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBook(bookId));
    dispatch(deleteBook(bookId));
  };
  return (
    <button type="button" onClick={handleClick}>Remove</button>
  );
}

export default RemoveBtn;

RemoveBtn.propTypes = {
  bookId: PropTypes.string.isRequired,
};
