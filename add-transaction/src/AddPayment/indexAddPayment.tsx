import ReactDOM from "react-dom/client"
import './../index.css'
import AddPayment from "./AddPayment"
import { UserLoginType } from "../types/UserLoginType"

const mount = (el: Element, userContext: UserLoginType): void => {
    const root: ReactDOM.Root = ReactDOM.createRoot(el)

    root.render(
    <AddPayment 
        id={userContext.id}
        name={userContext.name}
        role={userContext.role}
        login={userContext.login}
        logout={userContext.logout}
    />)
}

export {mount}