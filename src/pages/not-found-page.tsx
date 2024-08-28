import { Link } from 'react-router-dom';

export default function NotFoundPage(): JSX.Element {
  return (
    <main className="page__main">
      <div className="favorites__status-wrapper">
        <b className="favorites__status">404 Page not found</b>
        <p className="favorites__status-description">
          <Link to="/">Вернуться на главную</Link>
        </p>
      </div>
    </main>
  );
}
