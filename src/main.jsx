import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './Context.jsx'


const data = [
  { id: "todo-0", name: "ProcrastiNOT 1", completed: true, date: Date() },
  { id: "todo-1", name: "ProcrastiNOT 2", completed: false, date: Date() },
  { id: "todo-2", name: "ProcrastiNOT 3", completed: false, date: Date() },
];
 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App subject = "Derayvia" /> */}
    <ContextProvider>
      <App tasks = {data} />
    </ContextProvider>
  </React.StrictMode>,
)


