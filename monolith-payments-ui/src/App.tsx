import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import UserSearch from './components/UserSearch/UserSearch'
import TransactionsTable from './components/TransactionsTable/TransactionsTable'
import AddTransactionPage from './components/AddTransactionPage/AddTransactionPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/userContext'

function App() {

  const [search, setSearch] = useState<string>("")
  const [country, setCountry] = useState<string>("")

  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Payments Application!</h1>} />
          <Route path="/find" element=
            {<>
              <UserSearch
                search={search}
                setSearch={setSearch}
                country={country}
                setCountry={setCountry}
              />
              <div style={{ textAlign: "center" }}>
                <TransactionsTable
                  search={search}
                  setSearch={setSearch}
                  country={country}
                  setCountry={setCountry}
                />
              </div>
            </>
            }
          />
          <Route path="/find/:searchTerm" element=
            {<>
              <UserSearch
                search={search}
                setSearch={setSearch}
                country={country}
                setCountry={setCountry}
              />
              <div style={{ textAlign: "center" }}>
                <TransactionsTable
                  search={search}
                  setSearch={setSearch}
                  country={country}
                  setCountry={setCountry}
                />
              </div>
            </>
            }
          />
          <Route path="/add" element={
            <AddTransactionPage />
          }
          />
          <Route path="*" element={<p>404: Page not found</p>}/>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
