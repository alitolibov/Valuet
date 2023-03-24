import { useState } from "react";
import "./App.scss";
import Rounded8px from "./Components/Rounded8px";
import { TfiSearch } from "react-icons/tfi";

function App() {
  return (
    <div className="wrapper__container">
      <aside>
        <div>
          <div className="block_logo">
            <img src="src/assets/logo/logo.svg" alt="" />
          </div>
          <div className="block_tabs">
            <a href="#" className="tab">
              <img src="src/assets/icons/Overview.svg" alt="" />
              <span>Overview</span>
            </a>
            <a href="#" className="tab">
              <img src="src/assets/icons/Wallets.svg" alt="" />
              <span>Wallets</span>
            </a>
            <a href="#" className="tab">
              <img src="src/assets/icons/Transictions.svg" alt="" />
              <span>Transictions</span>
            </a>
            <a href="#" className="tab">
              <img src="src/assets/icons/Exchange.svg" alt="" />
              <span>Exchange</span>
            </a>
            <a href="#" className="tab">
              <img src="src/assets/icons/market.svg" alt="" />
              <span>Market</span>
            </a>
          </div>
        </div>
        <div class="block_log_out">
          <div class="log_out">
            <img
              className="cursor-pointer"
              src="/src/assets/icons/circle.svg"
              alt=""
            />
            <span className="cursor-pointer">Mike Jakson</span>
          </div>
          <div class="log_out">
            <img
              className="cursor-pointer"
              src="/src/assets/icons/log out.svg"
              alt=""
            />
            <span className="cursor-pointer">Log out</span>
          </div>
        </div>
      </aside>
      <main>
        <header>
          <div className="header_left">
            <input type="text"></input>
            <div className="relative top-[10px] right-[60px] ">
              <TfiSearch color="#FFFFFF" />
            </div>
          </div>

          <div className="header_right">
            <div className="relative left-[50px] top-[-10px] ">
              <img
                className=""
                src="/src/assets/icons/notification.svg"
                alt=""
              />
            </div>
            <img
              className="cursor-pointer"
              src="/src/assets/icons/folder.svg"
              alt=""
            />

            <img
              className="cursor-pointer"
              src="/src/assets/icons/Bell.svg"
              alt=""
            />
          </div>
        </header>

        <div className="content">
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
          {/* <Rounded8px />
          <Rounded8px />
          <Rounded8px /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
