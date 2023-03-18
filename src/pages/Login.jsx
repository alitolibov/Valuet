import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';


const Login = () => {

   const [eye, setEye] = useState(false)

   return ( 
   <div className="w-full h-[100vh] bg-logBg relative overflow-hidden">
      <div className="bgback w-[1338.5px] h-[557px] bg-contain absolute bottom-0 right-0"></div>
      <div className="bgtop w-[1082px] h-[766px] absolute bottom-0 right-0"></div>
      <div className="triangleBlue bottom-[159px] right-[487.27px]"></div>
      <div className="flex items-center gap-[259px] mx-auto w-fit mt-[69px]">
         <div className="w-[480px] h-[595px] pt-[82px] px-[50px] rounded-[8px] bg-loginBg drop-shadow-loginShadow">
            <p className="text-[36px] font-[500] font-roboto text-[#fff] text-center mb-[62px]">Welcome!</p>
            <div className="flex flex-col w-full gap-[26px]">
               <div className="w-full h-[58px] flex items-center gap-[16px] px-[16px] bg-[#2E3558] rounded-[8px]">
               <div className="borderline2 w-[35px] h-[35px] rounded-full flex items-center justify-center">
                  <div className="chel w-[13px] h-[13px]"></div>
               </div>
               <input type="text" name="email" placeholder="E-mail or Login" className="bg-transparent w-[80%] outline-none text-[#fff] font-roboto"/>
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
               <div className="flex items-center gap-[32px] mx-auto mb-[103px]">
               <button className='w-[105px] h-[42px] bg-btnBg rounded-[8px] text-[#949EC0] font-[700] font-roboto transition-[500ms] hover:invert-[3%]'>SIGN UP</button>
               <button className='w-[105px] h-[42px] bg-btnBg2 rounded-[8px] text-[#ffffff] font-[700] font-roboto transition-[500ms] hover:invert-[5%]'>SIGN IN</button>
               </div>
               <p className="text-[#5FB2FF] text-center underline underline-offset-1 font-roboto cursor-pointer transition-[500ms] hover:invert-[5%]">Forgot your password?</p>
            </div>
         </div>
         <div className="flex flex-col gap-[20px]">
         <p className="title2 font-raleway">valuet</p>
         <div className="w-[175px] h-[2px] borderline mx-auto"></div>
         <p className="font-roboto font-[300] text-[#fff] textShadow text-[24px] text-center">Your currency dashboard</p>
         </div>
      </div>
      <div className="triangleOrange top-[141px] left-[160px]"></div>
      <div className="reactangleblue top-[90px] left-[666px]"></div>
   </div> 
   );
}
 
export default Login;