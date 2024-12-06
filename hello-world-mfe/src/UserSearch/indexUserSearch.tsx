import ReactDOM from "react-dom/client"
import './../index.css'
import UserSearch, { UserSearchNavigateProps } from "./UserSearch"
import { MemoryRouter, Route, Routes } from "react-router-dom"

const mount = (el: Element, userSearch: UserSearchNavigateProps): void => {
    const root: ReactDOM.Root = ReactDOM.createRoot(el)

    root.render(<MemoryRouter>
        <Routes>
            <Route path="*" element={
        <UserSearch 
        country={userSearch.country}
        setCountry={userSearch.setCountry}
        search={userSearch.search}
        setSearch={userSearch.setSearch}
        navigate={userSearch.navigate}
    />}
    />
    </Routes>
    </MemoryRouter>)
}

export {mount}