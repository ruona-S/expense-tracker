import styled from "styled-components";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/contexts"
import  { currencyFormatter }  from "../utility"
import ReactDOM from 'react-dom';



function ViewExpenses({ onClose, budgetId, amount}) {

   const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets()


   const expenses = getBudgetExpenses(budgetId)

   const budget =
      UNCATEGORIZED_BUDGET_ID === budgetId
        ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
        : budgets.find(item => item.id === budgetId)

   

   if (!budgetId) {
      return null
   } 
   
   return ReactDOM.createPortal(
      <>
         <div>
            <Modal>
               <Box>
                  <header>
                     <h2>{budget?.name}</h2>
                     {budgetId !== UNCATEGORIZED_BUDGET_ID && (
                        <DeleteBtn onClick={() => {
                           deleteBudget(budget)
                           onClose()
                        }}>Delete</DeleteBtn>
                     )}
                     <CloseButton onClick={onClose}>&times;</CloseButton>
                  </header>

                  <InfoRow>
                     {expenses.map(expense => (
                        <BoxBody>
                           <div>{expense.description}</div>
                           <div>{currencyFormatter.format(expense.amount)}</div>
                           <SmallCloseBtn onClick={() => deleteExpense(expense)}>&times;</SmallCloseBtn>
                        </BoxBody>
                     ))}
                  </InfoRow>
               </Box>
            </Modal>
            <Overlay></Overlay>
         </div>
      </>,
      document.querySelector('#portal')
   )
}




// STYLED COMPONENTS

const Modal = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border: solid 1px #eee;
   max-width: 700px;
   margin: 0 auto;
   height: 60vh;
   width: 80%;
   padding: 1em 1em;
   display: flex;
   justify-content: center;
   background-color: rgb(123, 104, 238);
   color: white;
   z-index: 10;
`

const Overlay = styled.div`
   position: fixed;
   opacity: 1;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: 5;
`

const Box = styled.form`
  width: 80%;
  
  header {
     display: flex;
     justify-content: space-between;
     border-bottom: solid 1px #eee;
     padding: 1em 1em;
     margin-bottom: 2em;

     h2 {
        font-size: 1.8rem;
        margin-top: .3em;
     }
  }

  input {
     width: 80%;
     padding: .5em .5em;
     margin-bottom: 1em;
  }

  button {
     border-style: none;
     outline: red;
     padding: .3em .5em .3em .5em;
  }

`
const BoxBody = styled.div`
   display: flex;
   justify-content: space-between;
`

const InfoRow = styled.div`
   border-bottom: solid 1px white;
`

const CloseButton = styled.button`
  font-size: 1.5rem;
  border-style: none;
  background-color: transparent;
  color: white;
`
const DeleteBtn = styled(CloseButton)`
   border-style: none;
   background-color: red;
   color: white;
   font-size: 1.1rem;
`
const SmallCloseBtn = styled(CloseButton)`
   background-color: none;
   color: red;
   font-size: 1.3rem;
   margin-top: -.4em;
`



export default ViewExpenses;