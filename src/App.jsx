import { Route, Routes } from "react-router-dom"
import Aside from "./components/Aside"
import Header from "./components/Header"
import Layout from "./Layout/Layout"
import Overview from "./pages/Overview"


function App() {

  return (
    <div className="w-full h-[100vh] bg-bg ">
      <Routes>
        <Route path="/" element={ <Layout/>}>
            <Route path="/" index element={ <Overview/> }/>
            <Route path="wallets"  element={ <center><h1>Wallets</h1></center>}/>
            <Route path="transictions"  element={ <center><h1>Transictions</h1></center>}/>
            <Route path="exchange"  element={ <center><h1>Exchange</h1></center>}/>
            <Route path="market" index element={ <center><h1>Market</h1></center>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
