import styled from 'styled-components'
import { Recipes } from './Components/Recipes'
const Div = styled.div`
// height:100vh;
width:100%;
// background: #055f82;
// background: radial-gradient(circle, rgba(28, 115, 186, 1) 0%, rgba(4, 28, 51, 1) 62%);
color:black;
`
const App = () => {
  return (
    <Div>
      <Recipes />
    </Div>
  )
}

export default App