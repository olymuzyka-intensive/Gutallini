import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/#about">Перейти к модулю 1</Link>
      <Link to="/#contacts">Перейти к модулю 2</Link>
    </nav>
  );
};

export default Navigation;
