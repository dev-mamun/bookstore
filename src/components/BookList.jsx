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
import CSS from './Css/BookList.module.css';

function BookList() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className={CSS['booklist-container']}>
      <ul className={CSS.books}>
        {books.map((book) => (
          <li key={book.item_id}>
            <div className={CSS.book}>
              <div className={CSS['book-content']}>
                <div className={CSS['book-info']}>
                  <h4>{book.category}</h4>
                  <h2>{book.title}</h2>
                  <h6>{book.author}</h6>
                  <div className={CSS['action-buttons']}>
                    <button type="button">Comment</button>
                    <div className={CSS['vertical-divider']} />
                    <Remove bookId={book.item_id} />
                    <div className={CSS['vertical-divider']} />
                    <button type="button">Edit</button>
                  </div>
                </div>
                <div className={CSS['progress-container']}>
                  <div className={CSS['circular-progress-container']}>
                    <div className={CSS['circular-progress']} />
                  </div>
                  <div className="progress stats">
                    <p className={CSS.percent}>70%</p>
                    <p className={CSS.completed}>Completed</p>
                  </div>
                  <div className={CSS['progress-divider']} />
                  <div className={CSS['current-chapter-container']}>
                    <p className={CSS['current-chapter-label']}>current chapter</p>
                    <p className={CSS['current-chapter']}>Chapter 19</p>
                    <button type="button" className={CSS['update-progress']}>update progress</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={CSS['horizontal-divider']} />
    </div>
  );
}

export default BookList;
