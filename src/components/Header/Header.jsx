import { Link } from 'react-router-dom';

function Header() {
  return (
    <header role="header">
      <nav role="navigation">
        <a role="logo">NEXToon</a>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/webtoon">웹툰</Link>
          </li>
          <li>
            <Link to="/manga">일본만화</Link>
          </li>
          <li>
            <Link to="/novel">소설</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
