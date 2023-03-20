import Bitcoin from "../../public/images/Bitcoin.svg"
import gridCoin from "../../public/images/Cripta.svg"
import bitcoinIcon from "../../public/images/bitcoinIcon.svg"
import Arrow from "../../public/images/Arrow.svg"
import gridCoinIcon from "../../public/images/gridCoin.svg"


const Exchange = () => {
    return ( 
        <>
        <div className="mt-[28px] font-openSans">
            <h1 className="text-[#ffffff] text-[18px] font-semibold mb-[20px]">Exchange</h1>
            <div className="flex justify-between mb-[24px]">
                <div>
                    <h6 className="text-[#616A8B] text-[14px]">From</h6>
                    <div className="w-[730px] h-[256px] bg-blockColor rounded-[5px] shadow-3xl px-7 pt-[32px]" >
                        <div className="flex justify-between ">
                            <select className="text-[24px] text-[#ffffff] border-none bg-transparent h-[88px]">
                                <option  value="0">Bitcoin</option>
                                <option  value="1">DASH</option>
                                <option  value="2">PeerCoin</option>
                                <option  value="3">Aeternity</option>
                            </select>
                            <img src={Bitcoin} alt="" />
                        </div>
                        <input  className="text-[#ffffff] w-full h-[46px] rounded-[5px] bg-[#32395E]  border-b-2  border-b-[#1288E8] placeholder:text-[#FFFFFF] text-[24px] font-light px-3"  type="text" placeholder="0.45234 BTC" />
                    </div>
                </div>
                <div>
                    <h6 className="text-[#616A8B] text-[14px]">To</h6>
                    <div className="w-[730px] h-[256px] bg-blockColor rounded-[5px] shadow-3xl px-7 pt-[32px]">
                        <div className="flex justify-between  ">
                            <select className="text-[24px] text-[#ffffff] border-none bg-transparent h-[88px]">
                                <option className=""  value="0">GridCoin</option>
                                <option  value="1">NavCoin</option>
                                <option  value="2">LiteCoin</option>
                                <option  value="3">Nano</option>
                            </select>
                            <img src={gridCoin} alt="" />                            
                        </div>
                        <input  className="text-[#ffffff] w-full h-[46px] rounded-[5px] bg-[#32395E]  border-b-2 border-b-[#1288E8] placeholder:text-[#FFFFFF] text-[24px] font-light px-3"  type="text" placeholder="1.45534 GRC" />
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[123px] bg-itemColor rounded-[5px] shadow-3xl flex justify-center">
                <h1 className="text-[#ffffff] text-[24px] font-bold mt-[39px]">0.45234 BTC</h1>
                <img className="w-[69px]" src={bitcoinIcon} alt="" />
                <img className="w-[184px]" src={Arrow} alt="" />
                <img className="w-[59px]" src={gridCoinIcon} alt="" />
                <h1 className="text-[#ffffff] text-[24px] font-bold mt-[39px]">1.45534 GRC</h1>
            </div>

            <center><button className="w-[125px] h-[42px] bg-btn rounded-[8px] mt-[32px]">Exchange</button></center>
        </div>
        </>
     );
}
 
export default Exchange;