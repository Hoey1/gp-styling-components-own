// exports a styled <button />
// supports a 'color' prop to set the background color
// supports a 'textColor' props to adjust the text color
// supports a 'scream' prop to make the text UPPERCASE
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  color: red;
  border-radius: 4px;
  padding: 4px;
  &:hover {
    border-radius: 12px;
    background-color: red;
    color: white;
  }
`;

export default StyledButton;
