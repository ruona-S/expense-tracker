import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/contexts";
import UncategorisedCard from "./UncategorisedCard";


function UncategorisedBudgetCard(props) {
   const { getBudgetExpenses } = useBudgets()
   const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
      (total, expense) => total + expense.amount, 0)
   if (amount === 0) return null 
   //const amount = expenses.reduce((total, expense) => total + expense.amount, 0)

   return (
      <UncategorisedCard amount={amount} name="Other"  {...props} />
   )
}


export default UncategorisedBudgetCard;

