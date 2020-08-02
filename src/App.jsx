import React, { useState, useEffect } from 'react'

import Question from './components/Question'
import Form from './components/Form'
import ExpenseList from './components/ExpenseList'
import BudgetControl from './components/BudgetControl'

function App() {
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [addExpense, setAddExpense] = useState(false)

  useEffect(() => {
    if (addExpense) {
      setExpenses(prevState => [...prevState, expense])

      const remainingBudget = remaining - expense.quantity

      setRemaining(remainingBudget)
      setAddExpense(false)
    }
  }, [expense, addExpense, remaining])

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              setShowQuestion={setShowQuestion}
              setBudget={setBudget}
              setRemaining={setRemaining}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setExpense} setAddExpense={setAddExpense} />
              </div>
              <div className="one-half column">
                <ExpenseList expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
