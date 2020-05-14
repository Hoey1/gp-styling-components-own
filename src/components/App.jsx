import React, { useState } from 'react'

// reactstrap

// Import our styled components
import StyledContainer from './Container'

// No sense in re-creating this at every render of App
const initialFormValues = {
  username: '',
  email: '',
}

///////// STYLE MAKER ////////
function makeStyles(count) {
  return {
    bigSpan: {
      fontSize: `1.3em`,
      color: `${count % 2 === 0 ? 'green' : 'red'}`
    },
    funkySpan: {
      color: 'crimson'
    }
  }
}

export default function App(props) {
  ////////// STATE //////////
  ////////// STATE //////////
  ////////// STATE //////////
  const [count, setCount] = useState(0)
  const [formValues, setFormValues] = useState(initialFormValues)

  ////////// CALLBACKS THAT CHANGE STATE //////////
  ////////// CALLBACKS THAT CHANGE STATE //////////
  ////////// CALLBACKS THAT CHANGE STATE //////////
  const onCountIncrease = () => setCount(count + 1)

  const onInputChange = evt => {
    const inputName = evt.target.name
    const inputValue = evt.target.value
    // set values to what they were, overriding one of them
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const onResetEverything = () => {
    setFormValues(initialFormValues)
    setCount(0)
  }

  ////////// JSX //////////
  ////////// JSX //////////
  ////////// JSX //////////
  return (
    <StyledContainer>
      <p>The count is: <span style={makeStyles(count).bigSpan}>{count}</span></p>
      <p>Your username is: <span style={makeStyles(count).bigSpan}>{formValues.username}</span></p>
      <p>Your email is: <span style={makeStyles(count).bigSpan}>{formValues.email}</span></p>

      <StyledContainer alert count={count}>
        <button id='incButton' onClick={onCountIncrease}>increase</button>
        <button onClick={onResetEverything}>reset everything</button>
      </StyledContainer>

      <StyledContainer>
        <label>User:&nbsp;
          <input name='username' value={formValues.username} onChange={onInputChange} />
        </label><br />
        <label>Email:&nbsp;
          <input name='email' value={formValues.email} onChange={onInputChange} />
        </label>
      </StyledContainer>

      <StyledContainer>
        <span style={makeStyles(count).funkySpan}>❤</span>&nbsp;
        <a href="#">subscribe</a>
      </StyledContainer>
    </StyledContainer>
  )
}
