import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

function Question({ setBudget, setRemaining, setShowQuestion }) {
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState(false)

  const handleChange = ({ target }) => {
    setQuantity(parseInt(target.value))
  }
  const handleSubmit = e => {
    e.preventDefault()

    if (quantity < 1 || isNaN(quantity)) return setError(true)

    setError(false)
    setBudget(quantity)
    setRemaining(quantity)
    setShowQuestion(false)
  }

  console.log(quantity)

  return (
    <>
      <h2>Put your budget</h2>

      {error && <Error msg="You must write a valid budget" />}

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="budget"
          className="u-full-width"
          placeholder="Write your budget"
          onChange={handleChange}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set your budget"
        />
      </form>
    </>
  )
}

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
}

export default Question
