import { Link, NavLink } from "react-router-dom";

const Aside = () => {

   return ( 
   <>
      <aside className="w-[16%] h-[100vh] bg-gradient drop-shadow-aside rounded-asideRadius px-[15px] py-[24px] flex flex-col justify-between">
         <section className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[4px]">
               <p className="title font-raleway">valuet</p>
               <div className="w-[100px] borderline mx-auto"></div>
            </div>
            <div className="">
               <NavLink to={'/'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
                  <svg width="17" height="17" viewBox="0 0 17 17" className="grey">
                  <path d="M0.5 2.125C0.5 3.22957 1.39543 4.125 2.5 4.125C3.60457 4.125 4.5 3.22957 4.5 2.125C4.5 1.02043 3.60457 0.125 2.5 0.125C1.39543 0.125 0.5 1.02043 0.5 2.125ZM6.5 14.125C6.5 15.2296 7.39543 16.125 8.5 16.125C9.60457 16.125 10.5 15.2296 10.5 14.125C10.5 13.0204 9.60457 12.125 8.5 12.125C7.39543 12.125 6.5 13.0204 6.5 14.125ZM0.5 14.125C0.5 15.2296 1.39543 16.125 2.5 16.125C3.60457 16.125 4.5 15.2296 4.5 14.125C4.5 13.0204 3.60457 12.125 2.5 12.125C1.39543 12.125 0.5 13.0204 0.5 14.125ZM0.5 8.125C0.5 9.22957 1.39543 10.125 2.5 10.125C3.60457 10.125 4.5 9.22957 4.5 8.125C4.5 7.02043 3.60457 6.125 2.5 6.125C1.39543 6.125 0.5 7.02043 0.5 8.125ZM6.5 8.125C6.5 9.22957 7.39543 10.125 8.5 10.125C9.60457 10.125 10.5 9.22957 10.5 8.125C10.5 7.02043 9.60457 6.125 8.5 6.125C7.39543 6.125 6.5 7.02043 6.5 8.125ZM14.5 0.125C13.3954 0.125 12.5 1.02043 12.5 2.125C12.5 3.22957 13.3954 4.125 14.5 4.125C15.6046 4.125 16.5 3.22957 16.5 2.125C16.5 1.02043 15.6046 0.125 14.5 0.125ZM6.5 2.125C6.5 3.22957 7.39543 4.125 8.5 4.125C9.60457 4.125 10.5 3.22957 10.5 2.125C10.5 1.02043 9.60457 0.125 8.5 0.125C7.39543 0.125 6.5 1.02043 6.5 2.125ZM12.5 8.125C12.5 9.22957 13.3954 10.125 14.5 10.125C15.6046 10.125 16.5 9.22957 16.5 8.125C16.5 7.02043 15.6046 6.125 14.5 6.125C13.3954 6.125 12.5 7.02043 12.5 8.125ZM12.5 14.125C12.5 15.2296 13.3954 16.125 14.5 16.125C15.6046 16.125 16.5 15.2296 16.5 14.125C16.5 13.0204 15.6046 12.125 14.5 12.125C13.3954 12.125 12.5 13.0204 12.5 14.125Z"/>
                  </svg>
                  <p className="text font-openSans font-[600] text-[14px] text-[#616A8B] capitalize"  >Overview</p>
               </NavLink>
               <NavLink to={'wallets'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
               <svg width="17" height="13" viewBox="0 0 17 13" className="grey">
               <path d="M15.544 0H2.45308C1.65308 0 0.998535 0.65 0.998535 1.44444V11.5556C0.998535 12.35 1.65308 13 2.45308 13H15.544C16.344 13 16.9985 12.35 16.9985 11.5556V1.44444C16.9985 0.65 16.344 0 15.544 0ZM8.99854 5.77778H2.45308V4.33333H8.99854V5.77778ZM8.99854 2.88889H2.45308V1.44444H8.99854V2.88889Z"/>
               </svg>
                  <p className="text font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Wallets</p>
               </NavLink>
               <NavLink to={'transictions'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
               <svg width="17" height="16" viewBox="0 0 17 16" className="grey">
               <path d="M7.59854 5.15L2.39854 0L0.998535 1.4L6.14853 6.55L7.59854 5.15ZM11.4985 0L13.5485 2.05L0.998535 14.6L2.39854 16L14.9485 3.45L16.9985 5.5V0H11.4985ZM11.8485 9.4L10.4485 10.8L13.5985 13.95L11.4985 16H16.9985V10.5L14.9485 12.55L11.8485 9.4Z"/>
               </svg>
                  <p className="text font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Transictions</p>
               </NavLink>
               <NavLink to={'exchange'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
               <svg width="17" height="24" viewBox="0 0 17 24" className="grey">
               <path d="M11.6652 10.517L10.5985 11.5956L14.1185 15.1552L1.74524 15.1552L1.74524 16.6653H14.1185L10.5985 20.2249L11.6652 21.3035L16.9985 15.9102L11.6652 10.517Z"/>
               <path d="M6.33188 13.4831L7.39854 12.4044L3.87856 8.84484L16.2518 8.84484L16.2518 7.33473L3.87856 7.33473L7.39854 3.77517L6.33188 2.69651L0.998574 8.08978L6.33188 13.4831Z"/>
               </svg>
                  <p className="text font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Exchange</p>
               </NavLink>
               <NavLink to={'market'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
               <svg width="17" height="16" viewBox="0 0 17 16" className="grey">
               <path d="M15.2208 0H2.77631C1.79854 0 0.998535 0.8 0.998535 1.77778V14.2222C0.998535 15.2 1.79854 16 2.77631 16H15.2208C16.1985 16 16.9985 15.2 16.9985 14.2222V1.77778C16.9985 0.8 16.1985 0 15.2208 0ZM6.33187 12.4444H4.55409V6.22222H6.33187V12.4444ZM9.88742 12.4444H8.10965V3.55556H9.88742V12.4444ZM13.443 12.4444H11.6652V8.88889H13.443V12.4444Z"/>
               </svg>
                  <p className="text font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Market</p>
               </NavLink>
            </div>
         </section>
         <section className="flex flex-col gap-[24px]">
         <div className="w-full borderline2 mx-auto"></div>
         <div className="flex gap-[24px] items-center cursor-pointer">
            <div className="borderline2 w-[21px] h-[21px] rounded-full"></div>
            <p className="font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Mike Jakson</p>
         </div>
         <Link to={'/sign'} className="flex gap-[24px] items-center cursor-pointer">
            <div className="exit w-[21px] h-[16px] bg-contain bg-no-repeat"></div>
            <p className="font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Log out</p>
         </Link>
         </section>
      </aside>
   </>
    );
}
 
export default Aside;