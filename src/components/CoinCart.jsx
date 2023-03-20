


const CoinCart = () => {
    return (
        <div className="h-[148px] w-[284px]  bg-bg1 p-4">
            <h1>BitCoin</h1>
            <div className=" h-full  w-full flex items-center justify-between">
                <div className=" bg-no-repeat w-[64px] h-[64px] gap-2 bg100  bg-center flex items-center justify-center ">
                    <img src="/images/BitCoin.svg" width='22px' alt="" />

                </div>
                <div className="flex flex-col items-center">
                    <h1 className=" text-sm font-bold">600 BTC</h1>
                    <p className=" text-xs font-bold text-[#616A8B]">$30,000,000</p>
                </div>
                <div className=" w-fit  h-full flex flex-col justify-center items-center ">
                    <div className=" flex items-center gap-[10px] h-3  w-full py-3">
                        <img src="/images/VectorTop.svg" width='15px' />
                        <div className="flex flex-col">
                            <span className=" text-[8px] whitespace-nowrap">$1 200= 0,074 BTC</span>
                            <span className=" text-[6px] whitespace-nowrap">1 BTC = $6 542, 35</span>
                        </div>
                    </div>
                    <div className="border-solid border-y-[1px] flex items-center gap-[10px] h-3 border-[#644696] w-full py-3">
                        <img src="/images/VectorBot.svg" width='15px' />
                        <div className="flex flex-col">
                            <span className=" text-[8px] whitespace-nowrap">$1 200= 0,034 btc</span>
                            <span className=" text-[6px] whitespace-nowrap">1 BTC = $6 264, 35</span>
                        </div>
                    </div>
                    <div className="] flex items-center gap-[10px] h-3  w-full py-3">
                        <img src="/images/VectorBot.svg" width='15px' />
                        <div className="flex flex-col">
                            <span className=" text-[8px] whitespace-nowrap">$1 200= 0,075 btc</span>
                            <span className=" text-[6px] whitespace-nowrap">1 BTC = $6 642, 22</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinCart;