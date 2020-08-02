import React from 'react'
import PropTypes from 'prop-types'

import { reviewBudget } from '../helper/changeClass'

function BudgetControl({ budget, remaining }) {
  return (
    <>
      <div className="alert alert-primary">Budget: ${budget}</div>
      <div className={reviewBudget(budget, remaining)}>Remaining: $ {remaining}</div>
    </>
  )
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
}

export default BudgetControl
