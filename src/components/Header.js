import styled from "styled-components"
import  { currencyFormatter }  from "../utility"
import { ProgressBar } from 'react-bootstrap';


function Header({ amount, max }) {


  return (
    <div>
      <TopCard>
         <Title>
            <h4>Total Budget: {currencyFormatter.format(max)}</h4>
            <h5>Spent: {currencyFormatter.format(amount)}</h5>
         </Title>

         <ProgressBar 
            className="mb-5" 
            variant={getProgressBarVariant(amount, max)} 
            min={0}
            max={max}
            now={amount}
         />
      </TopCard>
    </div>
  )
}


//  () => setShowExpense(true)


function getProgressBarVariant(amount, max) {
   const ratio = amount / max
   if (ratio < 0.5) return "primary"
   if (ratio < 0.75) return "warning"
   return "danger"
 }





// STYLED COMPONENTS

const TopCard = styled.div`
  height: 10rem;
  border: solid 1px white;
  border-radius: 15px;
  padding: 1em 1em;
  margin-bottom: 2em;
  background-color: rgba(123, 104, 238, 0.3);
  color: white;

  h1 {
    margin-bottom: 1em;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: .5em 0 1em 0;
`




export default Header;