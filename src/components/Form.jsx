import React, { useState } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import Error from './Error'

function Form({ setExpense, setAddExpense }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState(false)

  const addExpense = e => {
    e.preventDefault()

    if (quantity < 1 || isNaN(quantity) || name.trim() === '') return setError(true)

    const expense = {
      name,
      quantity,
      id: shortid.generate(),
    }

    setExpense(expense)
    setAddExpense(true)
    setName('')
    setQuantity(0)
  }

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses here</h2>

      {error && <Error msg="Both fields require to be filled correctly" />}

      <div className="campo">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E.g. Bus"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Expense Quantity</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="E.g. 300"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value, 10))}
        />
      </div>

      <input type="submit" className="button-primary u-full-width" value="Add" />
    </form>
  )
}

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setAddExpense: PropTypes.func.isRequired,
}

export default Form
