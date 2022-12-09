import Box from 'components/Box';
import { NavLink } from 'react-router-dom';
import NavButtonCustom from 'components/AppBar/NavButtonCustom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box as="nav" flexDirection="row" gridGap="20px">
      <NavButtonCustom to="/" component={NavLink} end>
        Home
      </NavButtonCustom>
      {isLoggedIn && (
        <NavButtonCustom to="/phones" component={NavLink}>
          Phone book
        </NavButtonCustom>
      )}
    </Box>
  );
}