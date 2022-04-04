import { useRef } from "react";
import styled from "styled-components";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/contexts"
import ReactDOM from 'react-dom';



function AddExpense({ defaultBudgetId, open, onClose }) {

   const descriptionRef = useRef()
   const amountRef = useRef()
   const budgetIdRef = useRef()

   const { addExpense, budgets } = useBudgets()

   function handleSubmit(e) {
      e.preventDefault()
      addExpense({
         description: descriptionRef.current.value,
         amount: parseFloat(amountRef.current.value),
         budgetId: budgetIdRef.current.value
      })
      onClose()
   }


   if (!open) {
      return null
   } 

   return ReactDOM.createPortal(
      <>
         <div>
            <Modal>
               <Form onSubmit={handleSubmit}>
                  <header>
                     <h2>New Expense</h2>
                     <CloseButton onClick={onClose}>&times;</CloseButton>
                  </header>
                  <div>
                     <div>
                        <label>Description</label> <br />
                        <input ref={descriptionRef} id="description" type="text" required />
                     </div>
                     
                     <div>
                        <label>Amount</label> <br />
                        <input ref={amountRef} id="amount" type="number" required min={0} step={0.01} />
                     </div>

                     <div>
                        <label>Category</label> <br />
                        <select defaultValue={defaultBudgetId} ref={budgetIdRef}>
                           <option id={UNCATEGORIZED_BUDGET_ID}>Other</option>
                           {budgets.map(budget => (
                              <option key={budget.id} value={budget.id}>{budget.name}</option>
                           ))}
                        </select>
                     </div>     
                     <AddButton type="submit">Add</AddButton>
                  </div>
               </Form>
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
   border: solid 1px white;
   border-radius: 15px;
   max-width: 700px;
   margin: 0 auto;
   height: 65vh;
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

const Form = styled.form`
  width: 80%;
  
  header {
     display: flex;
     justify-content: space-between;
     border-bottom: solid 1px #eee;
     padding: 1em 1em;
     margin-bottom: 2em;
  }

  input {
     width: 80%;
     padding: .5em .5em;
     margin-bottom: 1em;
  }
  
   select {
      width: 80%;
      padding: 1em 1em;
      margin-bottom: 1em;
      color: rgb(123, 104, 238);
   }
`
const CloseButton = styled.button`
  font-size: 1.5rem;
  border-style: none;
  background-color: transparent;
  color: white;
  font-size: 1.8rem;
  margin-top: -.3em;
`
const AddButton = styled(CloseButton)`
   border-style: none;
   background-color: white;
   color: rgb(123, 104, 238);
   font-size: 1.2rem;
   width: 5rem;
   height: 3rem;
`



export default AddExpense;