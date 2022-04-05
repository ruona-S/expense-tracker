import React, { useState } from 'react'
import styled from "styled-components"
import Nav from './components/Nav';
import ExpenseCard from "./components/ExpenseCard";
import ViewExpenses from './components/ViewExpenses';
import UncategorisedBudgetCard from './components/UncategorisedBudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard';
import AddExpense from './components/AddExpense';
import AddBudget from './components/AddBudget';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/contexts"





function App() {

  const [showBudget, setShowBudget] = useState(false)
  const [showExpense, setShowExpense] = useState(false)
  const [viewExpenseBudgetId, setViewExpenseBudgetId] = useState()
  const [showExpenseBudgetId, setShowExpenseBudgetId] = useState()

  

  const { budgets, getBudgetExpenses } = useBudgets()


  function openAddExpense(budgetId) {
    setShowExpense(true)
    setShowExpenseBudgetId(budgetId)
  }
 


  return (
   <>
    <div>
      <Container>
        <Nav 
          setShowBudget={setShowBudget}  
          setShowExpense={setShowExpense} 
          openAddExpense={openAddExpense} 
        />

        <AddBudget open={showBudget} onClose={() => setShowBudget(false)}></AddBudget>
        <AddExpense open={showExpense} onClose={() => setShowExpense(false)} defaultBudgetId={showExpenseBudgetId}></AddExpense>
        <ViewExpenses  budgetId={viewExpenseBudgetId} onClose={() => setViewExpenseBudgetId()}></ViewExpenses>
        
        <div>
          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount, 0
            )
            return (
              <ExpenseCard
                setShowExpense={setShowExpense}
                name={budget.name}
                key={budget.id}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpense(budget.id)} 
                onViewExpenseClick={() => setViewExpenseBudgetId(budget.id)} 
              />
            )
          })}
          <UncategorisedBudgetCard 
            onAddExpenseClick={openAddExpense}
            onViewExpenseClick={() => setViewExpenseBudgetId(UNCATEGORIZED_BUDGET_ID)}
          />
          <TotalBudgetCard />
        </div>
      </Container>
      <Box></Box>
      <Box2></Box2>
      <Box3></Box3>
      <Box4></Box4>
      <Box5></Box5>
    </div>
    </> 
  );
}








//STYLED COMPONENTS

const Container = styled.div`
  padding: 1em 1em;
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  
  @media (min-width: 768px) {
    margin-top: 3em;
    margin-bottom: 3em;
    background-color: rgba(255, 255, 255, 0.1);
  }
`
const Box = styled.div`
  position: absolute;
  top: 10%;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;

  @media (min-width: 768px) {
    left: 20%;
    top: 2%;
  }
`

const Box2 = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;

  @media (min-width: 768px) {
    left: 50%;
    top: 40%;
  }
`
const Box3 = styled.div`
  position: absolute;
  top: 60%;
  left: 70%;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;

  @media (min-width: 768px) {
    left: 80%;
    top: 70%;
  }
`

const Box4 = styled.div`
  position: absolute;
  top: 0%;
  left: 70%;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;

  @media (min-width: 768px) {
    left: 80%;
    top: 20%;
  }
`


const Box5 = styled.div`
  position: absolute;
  top: 80%;
  left: 0%;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;

  @media (min-width: 768px) {
    left: 10%;
    top: 50%;
  }
`





export default App;
