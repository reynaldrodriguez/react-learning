import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredArray = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear
  );

  //const [items, setItems] = useState(filteredArray)
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    //setItems(filteredArray)
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filteredArray}/>
      </Card>
    </div>
  );
};
export default Expenses;
