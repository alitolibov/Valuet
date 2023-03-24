
const BalanceDeteils = ({num , color , text ,ind}) => {
    
    return (
        <>
            <div className="flex justify-between items-center ">
                <div className="flex justify-between items-center gap-2 ">
                    <span className=" rounded-full  w-[8px] h-[8px] "style={{background: color,filter: `drop-shadow(0px 4px 4px ` + color}}></span>
                    <span className=" text-xs font-normal">{text}</span>
                </div>
                <span className=" text-xs font-bold" style={{color: color}}>{num}%</span>
            </div>
        </>);
}

export default BalanceDeteils;