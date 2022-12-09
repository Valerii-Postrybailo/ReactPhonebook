import Box from 'components/Box';
import { useTheme } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Home() {
  const theme = useTheme();

  return (
    <Box>
      <MenuBookIcon
        sx={{ margin: '0 auto', marginTop: '20px', fontSize: '52px' }}
      />
      <Box
        as="h1"
        pt="20px"
        pb="10px"
        margin="0 auto"
        color={theme.palette.text.primary}
      >
        Phonebook home page
      </Box>
    </Box>
  );
}