import Box from 'components/Box';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';
import ColorMode from './ColorMode';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box
      as="header"
      flexDirection="row"
      justifyContent="space-between"
      marginTop="10px"
    >
      <Navigation />
      <ColorMode />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
}