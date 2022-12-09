import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Box from 'components/Box';
import { useUser } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';

export default function UserMenu() {
  const {
    user: { name, email },
  } = useUser();

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <Box flexDirection="row" gridGap="20px" justifyContent="center">
      <Box as="ul" flexDirection="row" gridGap="10px" alignItems="center">
        <Box as="li" flexDirection="row" gridGap="5px">
          <AccountCircleIcon color="primary" />
          {name}
        </Box>
        <Box as="li" flexDirection="row" gridGap="5px">
          <EmailIcon color="primary" />
          {email}
        </Box>
      </Box>

      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </Box>
  );
}