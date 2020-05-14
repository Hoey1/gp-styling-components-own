import styled from 'styled-components'
// exports a styled div
// should bring in the .container styles inside styles.less
const StyledContainer = styled.div`
  border: ${props => {
    if (props.count) {
      return props.count + 1
    }
    return '1'
  }}px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  margin: 16px;
  padding: 16px 8px 12px 16px;
  background-color: ${props => props.alert ? 'red' : 'white'};

  &:hover {
    cursor: pointer;
  }

  button {
    border-radius: 4px;
    padding: 4px;
  }

  a {
    color: green;
    font-size: 3em;
    background-color: black;
  }
`

export default StyledContainer
