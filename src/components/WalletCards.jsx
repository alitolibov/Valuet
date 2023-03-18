const WalletCards = ({ bgColor, img, text, roundColor, ChartImg }) => {

    // console.log(bgColor, img, text, roundColor);
    return (
        <>
            <div className={`min-w-[300px] w-[300px] h-[150px] bg-violet rounded-[12px] px-5 py-3 `}>
                <div className="flex justify-between">
                    <p className="text-[14px] font-medium text-[white]">{text}</p>
                    <div className="flex">
                        <div>
                            <p className="text-[16px] text-[white] ">5 248 USD</p>
                            <p className={`text-[12px] text text-[gray] `}>+2,59%</p>
                        </div>
                        <div className={`w-[44px] h-[44px] bg-[#644696] ml-[14px] flex fustyfi-center items-center rounded-[100%]`}>
                            <img className="ml-[12px]" src={img} alt="" />
                        </div>
                    </div>
                </div>

                <img src={ChartImg} className="" />
            </div>
        </>
    );
}

export default WalletCards;