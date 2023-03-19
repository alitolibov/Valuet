import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Header from "../components/Header";


const Layout = () => {
   return ( 
   <div className="w-[100%] flex h-[100vh] overflow-hidden">
      <Aside/>
      <div className="w-[79.1%] mx-auto">
      <Header/>
      <main>
         <Outlet/>
      </main>
      </div>
   </div> 
   );
}
 
export default Layout;