import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import PolkadotBalanceHistory from './components/Polkadot/Account/PolkadotBalanceHistory.jsx'
import PolkadotLayout from './components/Polkadot/Account/PolkadotLayout.jsx'
import PolkadotTokenHolder from './components/Polkadot/Account/PolkadotTokenHolder.jsx'
import PolkadotAccountList from './components/Polkadot/Account/PolkadotAccountList.jsx'
import PolkadotAccountStats from './components/Polkadot/Account/PolkadotAccountStats.jsx'
import PolkadotRewardSlashList from './components/Polkadot/Staking/PolkadotRewardSlashList.jsx'
import PolakdotValidatorList from './components/Polkadot/Staking/PolkadotValidatorList.jsx'
import PolkadotVotedValidator from './components/Polkadot/Staking/PolkadotVotedValidator.jsx'
import PolkadotContractEvents from './components/Polkadot/Contract/PolkadotContractEvents.jsx'
import PolkadotContractMeta from './components/Polkadot/Contract/PolkadotContractMeta.jsx'
import PolkadotBlockDetails from './components/Polkadot/Block/PolkadotBlockDetails.jsx'
import PolkadotBlockList from './components/Polkadot/Block/PolkadotBlockList.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/polkadotbalancehistory' element={<PolkadotBalanceHistory/>}/>
    <Route path='/polkadotlayout' element={<PolkadotLayout/>}/>
    <Route path='/polkadottokenholder' element={<PolkadotTokenHolder/>}/>
    <Route path='/polkadotaccountlist' element={<PolkadotAccountList/>}/>
    <Route path='/polkadotaccountstats' element={<PolkadotAccountStats/>}/>
    <Route path='/polkadotrewardslash' element={<PolkadotRewardSlashList/>}/>
    <Route path='/polkadotvalidatorlist' element={<PolakdotValidatorList/>}/>
    <Route path='/polkadotvotedvalidaor' element={<PolkadotVotedValidator/>}/>
    <Route path='/polkadotcontractevents' element={<PolkadotContractEvents/>}/>
    <Route path='/polkadotcontractmeta' element={<PolkadotContractMeta/>}/>
    <Route path='/polkadotblockdetails' element={<PolkadotBlockDetails/>}/>
    <Route path='/polkadotblocklist' element={<PolkadotBlockList/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar/>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
