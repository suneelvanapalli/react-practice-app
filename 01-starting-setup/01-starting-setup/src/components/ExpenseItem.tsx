import './ExpenseItem.css';
import React, { Component } from 'react';

class ExpenseItem extends Component {
  render() {
    return (
      <div className='expense-item'>
        <h1>Expense Item</h1>
        <div className='expense-item__description'>
          <h2>Car Insurance</h2>
          <p className='expense-item__value'>$ 272.50</p>
        </div>
      </div>
    );
  }
}

export default ExpenseItem;
