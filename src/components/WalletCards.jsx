import { Box } from "@mui/material";

const WalletCards = ({ bgColor, img, text, roundColor, ChartImg }) => {

    // console.log(bgColor, img, text, roundColor);


    return (
        <>
            <Box  sx={{
                width: 300,
                height: 150,
                minWidth: 300,
                borderRadius: '12px',
                padding: '3px 12px',
                background: bgColor
            }}>
                <div className="flex justify-between py-3 ">
                    <p className="text-[14px] font-medium text-[white]">{text}</p>
                    <div className="flex">
                        <div>
                            <p className="text-[16px] text-[white] ">5 248 USD</p>
                            <p className={`text-[12px] text text-[gray] `}>+2,59%</p>
                        </div>
                        <div className={`w-[44px] h-[44px] bg-[${roundColor}] ml-[14px] flex fustyfi-center items-center rounded-[100%]`}>
                            <img className="ml-[12px]" src={img} alt="" />
                        </div>
                    </div>
                </div>

                <img src={ChartImg} className="" />
            </Box>
        </>
    );
}

export default WalletCards;