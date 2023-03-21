import { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const SignUp = () => {
   const [eye, setEye] = useState(false)
   return ( 
   <>
   <div className="w-full h-[58px] flex items-center gap-[16px] px-[16px] bg-[#2E3558] rounded-[8px]">
               <div className="borderline2 w-[35px] h-[35px] rounded-full flex items-center justify-center">
                  <EmailIcon sx={{width: '17px', height: '17px', filter: 'invert(100%)'}}/>
               </div>
               <input type="text" name="email" placeholder="E-mail or Number" className="bg-transparent w-[80%] outline-none text-[#fff] font-roboto"/>
               </div>
               <div className="w-full h-[58px] flex items-center gap-[16px] px-[16px] bg-[#2E3558] rounded-[8px]">
               <div className="borderline2 w-[35px] h-[35px] rounded-full flex items-center justify-center">
                  <div className="chel w-[13px] h-[13px]"></div>
               </div>
               <input type='text' name="name" placeholder="Name" className="bg-transparent w-[74%] outline-none text-[#fff] font-roboto"/>
               </div>
               <div className="w-full h-[58px] flex items-center gap-[16px] px-[16px] bg-[#2E3558] rounded-[8px]">
               <div className="borderline2 w-[35px] h-[35px] rounded-full flex items-center justify-center">
                  <div className="lock w-[13.5px] h-[13.5px]"></div>
               </div>
               <input type={eye ? 'text' : 'password'} name="password" placeholder="Password" className="bg-transparent w-[74%] outline-none text-[#fff] font-roboto"/>
               <div className="" onClick={() => setEye(!eye)}>
               {eye ? <RemoveRedEyeIcon sx={{filter: 'invert(100%)', cursor: 'pointer'}}/> : <VisibilityOffIcon sx={{filter: 'invert(100%)', cursor: 'pointer'}}/>}
               </div>
               </div>
               <Link to={'/'} className='w-full flex items-center justify-center h-[42px] bg-btnBg2 rounded-[8px] text-[#ffffff] font-[700] font-roboto transition-[500ms] hover:invert-[5%]'>Registration</Link>
   </> );
}
 
export default SignUp;