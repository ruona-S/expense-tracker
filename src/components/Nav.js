import styled from "styled-components"

function Nav({ setShowBudget, openAddExpense }) {
   return (
      <div>
         <div>
            <Logo>Spending Tracker</Logo>
         </div>
         <ButtonWrapper>
            <BudgetButton onClick={() => setShowBudget(true)}>Add Budget</BudgetButton>
            <ExpenseButton onClick={openAddExpense} >Add Expense</ExpenseButton>
         </ButtonWrapper>
      </div>
   )
}


//STYLED COMPONENTS
const Logo = styled.div`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  padding: 1em 1em;
  margin-bottom: 1em;
  color: white;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2em;
`

const BudgetButton = styled.button`
  background-color: rgb(123, 104, 238);
  color: white;
  width: 10rem;
  height: 3rem;
  border: solid 1px white;
  border-radius: 15px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(230, 230, 250);
    color: rgb(123, 104, 238);
  }
`
const ExpenseButton = styled(BudgetButton)`
  background-color: rgb(123, 104, 238);
`

export default Nav;