import styled from 'styled-components';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system';

const Box = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
  },
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
);

export default Box;