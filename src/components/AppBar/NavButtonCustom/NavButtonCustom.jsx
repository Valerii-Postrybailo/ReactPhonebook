import { Button } from '@mui/material';
import { useMatch, useResolvedPath } from 'react-router-dom';

export default function NavButtonCustom({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Button variant={match ? 'contained' : 'text'} to={to} {...props}>
        {children}
      </Button>
    </div>
  );
}