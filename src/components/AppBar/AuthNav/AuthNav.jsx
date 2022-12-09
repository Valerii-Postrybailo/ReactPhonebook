import Box from 'components/Box';
import { NavLink } from 'react-router-dom';
import NavButtonCustom from 'components/AppBar/NavButtonCustom';

export default function AuthNav() {
  return (
    <Box as="nav" flexDirection="row" gridGap="20px">
      <NavButtonCustom component={NavLink} to="register">
        Register
      </NavButtonCustom>
      <NavButtonCustom component={NavLink} to="login">
        Login
      </NavButtonCustom>
    </Box>
  );
}