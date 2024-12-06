import ReactDOM from "react-dom/client"
import './../index.css'
import PaymentList from "./PaymentList"
import { UserSearchNavigateProps } from "../UserSearch/UserSearch"

const mount = (el: Element, userSearch: UserSearchNavigateProps): void => {
    const root: ReactDOM.Root = ReactDOM.createRoot(el)

    root.render(<PaymentList 
        country={userSearch.country}
        setCountry={userSearch.setCountry}
        search={userSearch.search}
        setSearch={userSearch.setSearch}
        navigate={userSearch.navigate}
    />)
}
  

export {mount}