import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
`;

export const TextFieldStyled = styled(TextField)`
  width: 300px;
  margin-bottom: '25px';
`;