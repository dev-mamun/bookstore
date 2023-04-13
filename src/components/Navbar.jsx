/** ****************************************
 * Project: bookstore
 * File: Navbar.jsx
 * Created: 4/12/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
import { Link } from 'react-router-dom';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];
function NavBar() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      <h1 style={{ fontFamily: 'monospace', fontSize: '30px' }}>Mamun Book Store</h1>
      <ul style={{
        display: 'flex',
        listStyleType: 'none',
        gap: '80px',
      }}
      >
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.path} style={{ textDecoration: 'none' }}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
