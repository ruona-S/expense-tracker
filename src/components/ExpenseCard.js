import styled from "styled-components"
import  { currencyFormatter }  from "../utility"



function ExpenseCard({ name, onAddExpenseClick, onViewExpenseClick, amount, max }) {

  const progress = []
  if (amount > max) {
    progress.push("bg-danger", "bg-opacity-10")
  } else {
    progress.push("bg-light")
  }

  return (
    <Wrapper>
      <Card>
        <CardTitle>
          <h3>{name}</h3>
          <h5>Budget: {currencyFormatter.format(max)}</h5>
          <h5>Spent: {currencyFormatter.format(amount)}</h5>
        </CardTitle>
        <ViewButton onClick={onViewExpenseClick}>View Expenses</ViewButton>
        <ViewButton onClick={onAddExpenseClick} >Add Expense</ViewButton>
      </Card>
    </Wrapper>
  )
}



// STYLED COMPONENTS

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1em;
  padding: 1em 1em;
`

const Card = styled.div`
  text-align: center;
  border: solid 1px #eee;
  margin-top: 2em;
  height: 20rem;
  color: white;
  border-radius: 15px;
  background-color: rgba(123, 104, 238, 0.3);
`



const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
  margin-bottom: 3em;
  
  h3 {
    font-size: 1.4rem;
  }
  h5 {
    margin-top: .3em;
  }
`

const ViewButton = styled.button`
  background-color: transparent;
  color: white;
  width: 10rem;
  height: 3rem;
  border: solid 1px white;
  border-radius: 15px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: .3em;
  margin-bottom: .3em;

  &:hover {
    background-color: rgb(230, 230, 250);
    color: rgb(123, 104, 238);
  }
`




export default ExpenseCard;