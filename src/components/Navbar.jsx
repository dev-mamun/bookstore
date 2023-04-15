/** ****************************************
 * Project: bookstore
 * File: Navbar.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CSS from './Css/Navbar.module.css';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'categories', text: 'CATEGORIES' },
];

function NavBar() {
  return (
    <nav className={CSS['nav-bar']}>
      <h1 className={CSS['nav-brand']}>Mamun Book Store</h1>
      <ul className={CSS['nav-links']}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <button type="button" className={CSS['icon-button']}>
        <FontAwesomeIcon icon={faUser} className={CSS['fa-user']} aria-label="user-icon" />
      </button>
    </nav>
  );
}

export default NavBar;
