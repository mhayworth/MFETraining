import './App.css'
import ReactDOM from "react-dom/client"
import App from "./App"

const mount = (el: Element): void => {
    const root: ReactDOM.Root = ReactDOM.createRoot(el)

    root.render(<App></App>)
}

export {mount}