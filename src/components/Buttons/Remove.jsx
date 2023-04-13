/** ****************************************
 * Project: bookstore
 * File: Remove.jsx
 * Created: 4/13/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../../redux/books/bookslice';

function RemoveBtn({ bookId }) {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(removeBook(bookId))}>Remove</button>
  );
}

export default RemoveBtn;

RemoveBtn.propTypes = {
  bookId: PropTypes.string.isRequired,
};
