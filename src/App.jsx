import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Loading from "./components/Loading"
import Layout from "./Layout/Layout"

const Overview = lazy(() => import("./pages/Overview"))
const Wallets = lazy(() => import("./page/Wallets"))
const Login = lazy(() => import("./pages/Login"))



function App() {

  return (
    <div className="w-full h-[100vh] bg-bg ">
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="sign" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={ <Overview/> } />
          <Route path="wallets" element={<Wallets />} />
          <Route path="transictions" element={<center><h1>Transictions</h1></center>} />
          <Route path="exchange" element={<center><h1>Exchange</h1></center>} />
          <Route path="market" element={<center><h1>Market</h1></center>} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
