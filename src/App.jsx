import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Loading from "./components/Loading"
import Layout from "./Layout/Layout"
import { ToastContainer, toast } from 'react-toastify';

const Overview = lazy(() => import("./pages/Overview"))
const Wallets = lazy(() => import("./page/Wallets"))
const Login = lazy(() => import("./pages/Login"))
const Exchange = lazy(() => import("./pages/Exchange"))
const Market = lazy(() => import("./pages/Market"))
const PageTransiction = lazy(() => import("./pages/PageTransiction"))




function App() {

  return (
    
    <div className="w-full h-[100vh] bg-bg ">
       <ToastContainer />
      <Suspense fallback={<Loading/>}>
      <ToastContainer />
      <Routes>
        <Route path="sign" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={ <Overview/> } />
          <Route path="wallets" element={<Wallets />} />
          <Route path="transictions" element={<PageTransiction/>} />
          <Route path="exchange" element={<Exchange/> }/>
          <Route path="market" element={<Market/>} />
        </Route>
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
