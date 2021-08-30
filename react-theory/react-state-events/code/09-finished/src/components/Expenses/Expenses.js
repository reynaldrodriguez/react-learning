import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredArray = props.items.filter((expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  const [items, setItems] = useState(filteredArray)
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    setItems(filteredArray)
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {
          items.map((expense)=> (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))
        }
      </Card>
    </div>
  );
};
export default Expenses;
