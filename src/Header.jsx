import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Главная</Link>
      <Link to="/services">Услуги</Link>
      <Link to="/contacts">Контакты</Link>
    </header>
  );
}

export default Header;
