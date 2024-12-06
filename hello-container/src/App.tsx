import './App.css'
import AddPayment from './remotecomponents/AddPayment'
import HelloWorld from './remotecomponents/HelloWorld'
import PaymentList from './remotecomponents/PaymentList'
import AppMod from './remotecomponents/App'
import { UserProvider } from './UserContext/userContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import { useState } from 'react'
import UserSearch from './remotecomponents/UserSearch'

function App() {
  const [search, setSearch] = useState<string>("")
  const [country, setCountry] = useState<string>("")

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/home" element={<>
              <h1>Hello from the container!</h1>
              <HelloWorld />
            </>
            }>
            </Route>
            <Route path="/find" element={
              <>
                <UserSearch
                  search={search}
                  setSearch={setSearch}
                  country={country}
                  setCountry={setCountry}
                />
                <PaymentList
                  search={search}
                  setSearch={setSearch}
                  country={country}
                  setCountry={setCountry}
                />
              </>
            }
            ></Route>
            <Route path="/find/:searchTerm" element={
              <p>hi</p>
              // <>
              //   <UserSearch
              //     search={search}
              //     setSearch={setSearch}
              //     country={country}
              //     setCountry={setCountry}
              //   />
              //   <PaymentList
              //     search={search}
              //     setSearch={setSearch}
              //     country={country}
              //     setCountry={setCountry}
              //   />
              // </>
            }
            ></Route>
            <Route path="/add" element={<AddPayment />}></Route>
            <Route path="/testing" element={<>      <p>----DIVYAS TESTING-----</p>
              <AppMod /></>}></Route>


          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
