import { Route, Routes } from "react-router-dom"
import Aside from "./components/Aside"
import Header from "./components/Header"
import Layout from "./Layout/Layout"
import Wallets from "./page/Wallets"


function App() {

  return (
    <div className="w-full h-[100vh] bg-bg ">
      <Routes>
        <Route path="/" element={ <Layout/>}>
            <Route path="/" index element={ <center><h1>Overview</h1></center>}/>
            <Route path="wallets" index element={<Wallets/>}/>
            <Route path="transictions" index element={ <center><h1>Transictions</h1></center>}/>
            <Route path="exchange" index element={ <center><h1>Exchange</h1></center>}/>
            <Route path="market" index element={ <center><h1>Market</h1></center>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
