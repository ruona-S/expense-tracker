import React from 'react'
import { useContext, useState } from 'react'
import { v4 as uuidV4 } from 'uuid' // for unique id
import useLocalStorage from '../hooks/useLocalStorage'


const BudgetContext = React.createContext()

export const UNCATEGORIZED_BUDGET_ID = "Other"

export function useBudgets() {
   return useContext(BudgetContext)
}

export const BudgetsProvider = ({ children }) => {

   const [ budgets, setBudget] = useLocalStorage("budgets", [])
   const [ expenses, setExpense ] = useLocalStorage("expenses", [])
   


   function getBudgetExpenses(budgetId) {
      return expenses.filter(expense => expense.budgetId === budgetId)
   }

   function addBudget({ name, max }) {
      setBudget(prevBudgets => {
         if (prevBudgets.find(budget => budget.name === name)) {
            return prevBudgets
         }
         return [...prevBudgets, { id: uuidV4(), name, max }]
      })
   }
      
   function addExpense({ description, amount, budgetId }) {
      setExpense(prevExpenses => {
         return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }]
      })
   }

   function deleteBudget({ id }) {
      setBudget(prevBudgets => {
         return prevBudgets.filter(budget => budget.id !== id)
      })
   }
      
   function deleteExpense({ id }) {
      setExpense(prevExpenses => {
         return prevExpenses.filter(expense => expense.id !== id)
      })
   }




   return <BudgetContext.Provider value={{
      budgets,
      expenses,
      getBudgetExpenses,
      addExpense,
      addBudget,
      deleteBudget,
      deleteExpense
   }}>{children}</BudgetContext.Provider>
}