import React from "react";
import Rounded8px from "../components/Rounded8px";

const PageTransiction = () => {
  return (
    <div>
      <main>
        <div className="pt-[20px]">
          <div className="w-full   flex justify-between items-center">
            <p className="text-[#FFFF] text-[18px] font-[600]">Transictions</p>
            <button className="w-[125px] h-[32px] rounded-[25px] bg-[#3887FE] ">
              <p className="font-[700] text-[14px] text-[#FFF] shadow-[#5523dd] ">
                Export History
              </p>
            </button>
          </div>
        </div>
        <div className="w-full  flex items-center pt-[20px] justify-between ">
          <p className="text-[#616A8B] text-[18px] font-[600]">Total 1,543</p>
          <div className="flex gap-[30px]">
            <button className="w-[38px] h-[24px] bg-[#32395E] rounded-[5px] cursor-pointer ">
              <p className="text-[14px] leading-[19px] text-[#FFF] font-[700]">
                All
              </p>
            </button>
            <button>
              <p className="text-[#616A8B] font-[700] text-[15px] leading-[19px]">
                Send
              </p>
            </button>
            <button>
              <p className="text-[#616A8B] font-[700] text-[15px] leading-[19px]">
                Recent
              </p>
            </button>
          </div>
        </div>
        <div className="w-full gap-[20px]">
          <Rounded8px />
          <Rounded8px />
          <Rounded8px />
          <Rounded8px />
          <Rounded8px />
          <Rounded8px />
          <Rounded8px />
          <Rounded8px />
        </div>
      </main>
    </div>
  );
};

export default PageTransiction;
