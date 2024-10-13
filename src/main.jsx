import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import AccountBalance from './components/Account/AccountBalance.jsx'
import PolkadotBalanceAccount from './components/Polkadot/Account/PolkadotBalanceAccount.jsx'
import PolkadotLayout from './components/Polkadot/Account/PolkadotLayout.jsx'
import PolkadotTokenHolder from './components/Polkadot/Account/PolkadotTokenHolder.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/accountbalance' element={<AccountBalance/>}/>
    <Route path='/polkadotbalanceaccount' element={<PolkadotBalanceAccount/>}/>
    <Route path='/polkadotlayout' element={<PolkadotLayout/>}/>
    <Route path='/polkadottokenholder' element={<PolkadotTokenHolder/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar/>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
