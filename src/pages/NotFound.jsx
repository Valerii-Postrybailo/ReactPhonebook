import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h2>404 Page not found</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}