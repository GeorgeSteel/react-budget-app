import React from 'react'
import PropTypes from 'prop-types'
import Expense from './Expense'

function ExpenseList({ expenses }) {
  return (
    <div className="gastos-realizados">
      {expenses.map(expense => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  )
}

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
}

export default ExpenseList
