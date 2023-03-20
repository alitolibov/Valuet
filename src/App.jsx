import { Route, Routes } from "react-router-dom"
import Aside from "./components/Aside"
import Header from "./components/Header"
import Layout from "./Layout/Layout"
import Exchange from "./pages/Exchange"


function App() {

  return (
    <div className="w-full h-[100vh] bg-bg ">
      <Routes>
        <Route path="/" element={ <Layout/>}>
            <Route path="/" index element={ <center><h1>Overview</h1></center>}/>
            <Route path="wallets" element={ <center><h1>Wallets</h1></center>}/>
            <Route path="transictions" element={ <center><h1>Transictions</h1></center>}/>
            <Route path="exchange" element={<Exchange />}/>
            <Route path="market" element={ <center><h1>Market</h1></center>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
