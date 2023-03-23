import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const Rounded8px = () => {
  return (
    <div className="pt-[10px]">
      <div className="bg-[#2E3558] shadow-[0px 4px 8px rgba(0, 0, 0, 0.05)] justify-between flex items-center w-[100%] h-[62px] rounded-[8px]">
        <p className="font-[600] text-[#FFF] text-[14px] pl-[20px] leading-[19px] font-sans">
          AM 01:16
        </p>
        <p className="font-[400] text-[#FFF] text-[14px] ">24 dec 2018</p>
        <img
          className="w-[32px] h-[32px]"
          src="/src/assets/image/BTC.svg"
          alt=""
        />
        <HiArrowLongRight color="#00E8AC" />
        <p className="font-[400] text-[14px] text-[#FFF]">
          74EKRJMXkhKDR5dj34578fgirwE22sfg
        </p>
        <p className="font-[700] text-[#FFF] text-[14px] ">0.0085 BTC</p>

        <div className="pr-[10px]">
          <button className="bg-[#00E8ACBF] w-[85px] h-[30px] rounded-[5px] ">
            <p className="text-[#FFF] font-[700] leading-[19px]">Completed</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rounded8px;
