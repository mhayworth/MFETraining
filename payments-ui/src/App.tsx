import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import UserSearch from './components/UserSearch/UserSearch'
import TransactionsTable from './components/TransactionsTable/TransactionsTable'

function App() {

  const [search, setSearch] = useState<string>("")

  return (
    <>
      <Header />
      <UserSearch
        search={search}
        setSearch={setSearch}
      />
      <div style={{ textAlign: "center" }}>
        <TransactionsTable
          search={search}
          setSearch={setSearch}
        />
      </div>
    </>
  )
}

export default App
