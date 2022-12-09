import { useUser } from 'hooks';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}