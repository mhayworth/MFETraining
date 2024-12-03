import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const myPara: React.ReactElement = React.createElement("p", {key: "p1"}, "This is paragraph 1");
const myParaJSX: React.ReactElement = 
<p>This is paragraph 1</p>
const myPara2: React.ReactElement = React.createElement("p", {key: "p2"}, "This is paragraph 2");
const myButton: React.ReactElement = React.createElement("button", {key: "b1"}, "This is the button");
const myList: React.ReactElement = React.createElement("ul", {key: "ul1"}, [
  React.createElement("li", {key: "item1"}, "item 1"), 
  React.createElement("li", {key: "item2"}, "item 2"), 
  React.createElement("li", {key: "item3"}, "item 3")
])
const myDiv: React.ReactElement = React.createElement("div", {className: "first-div", style: {"color": "red"}}, [myPara, myPara2, myButton, myList])

const myDivJSX: React.ReactElement = 
<div className="first-div" style={{color: "red"}}>
  {myParaJSX}
  {myPara2}
  {myButton}
  {myList}
</div>

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {myDiv}
    {myDivJSX}
  <App />
  </StrictMode>
)
 