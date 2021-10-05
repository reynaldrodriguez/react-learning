import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false)

  const goalInputChangeHandler = event => {
    if(enteredValue.trim() !== '') {
      setIsValid(false)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim() !== '') {
      setIsValid(false)
      props.onAddGoal(enteredValue)
    } else {
      setIsValid(true)
      return;
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
