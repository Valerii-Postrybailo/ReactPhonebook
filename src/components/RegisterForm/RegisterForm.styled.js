import styled from 'styled-components';
import Button from '@mui/material/Button';

export const FormStyled = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const ButtonStyled = styled(Button)`
  width: fit-content;
`;