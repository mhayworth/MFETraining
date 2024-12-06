import './App.css'
import AddPayment from './AddPayment/AddPayment'

function App() {

  return (
    <>
      <AddPayment 
        id={0}
        name={"Michael"}
        role={"Michael"}
        login={() => {}}
        logout={() => {}}
    />
    </>
  )
}

export default App
