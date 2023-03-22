import MarketChart from "./MarketChart";



const MarketItem = (props) => {
   console.log(props);
   return ( 
   <div className="h-[179px] rounded-[5px] px-[16px] py-[16px] flex flex-col gap-[25px] bg-marketBg shadow-marketShadow">
      <div className="flex w-full justify-between items-center">
         <div className="flex gap-[8px] items-center">
            <div className="backBg" style={{background: props.bg}}>
               <div className="centerBg" style={{background: props.bg2}}>
               <div className="w-[29px] h-[34px]  bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url("../public/images/${props.frame}.png")`}}></div>
               </div>
            </div>
            <div className="flex flex-col items-center gap-[1px]">
               <p className="font-openSans font-bold text-[12px] text-[#fff]">{props.name}</p>
               <p className="font-openSans font-bold text-[12px]" style={{color: props.proc[0] === '-' ? '#F35050' : '#00E8AC'}}>{props.proc}</p>
            </div>
         </div>
         <div className="flex flex-col gap-[4px] items-end">
            <div className="flex items-center gap-[12px]">
            <p className="font-openSans font-bold text-[12px] text-[#fff]">EUR</p>
            <p className="font-openSans font-bold text-[12px] text-[#616A8B;]">USD</p>
            <p className="font-openSans font-bold text-[12px] text-[#616A8B;]">BTC</p>
            </div>
            <p className="font-openSans font-semibold text-[19px] text-[#fff]">1,307.96 <span className="font-openSans font-semibold text-[16px] text-[#fff]">EUR</span></p>
            <div className="flex items-center gap-[12px]">
            <p className="font-openSans font-[400] text-[14px] text-[#616A8B;]">Volume</p>
            <div className="flex items-center gap-[5px]">
               <p className="font-openSans font-semibold text-[16px] text-[#fff]">18,423</p>
               <p className="font-openSans font-[400] text-[14px] text-[#616A8B;]">DASH</p>
            </div>
            </div>
         </div>
      </div>
      <div className="w-full h-[47px]">
         <MarketChart color={props.line}/>
      </div>
   </div>
    );
}
 
export default MarketItem;