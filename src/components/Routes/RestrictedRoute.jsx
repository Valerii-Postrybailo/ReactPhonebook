import { useUser } from 'hooks';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}