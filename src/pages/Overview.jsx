import { Route, Routes } from "react-router-dom"



function Overview() {

    return (
        <div className="font-openSans text-white  pt-7">
            <div className=" flex  justify-between">
                <div className="flex items-center gap-10 font-semibold">
                    <h1 className="text-white text-lg  font-semibold ">Overview</h1>
                    <span className=" text-sm text-[#54669C]  ">25 october, Sunday</span>
                </div>
                <button className="text-white  w-[125px] bg-gradient-to-r from-cyan-500 to-blue-500 h-8 text-sm font-bold rounded-3xl">Add widget</button>
            </div>
            <div className="h-[312px] flex gap-4 mt-6 ">
                <div className="h-full w-[226px] bg-balance">
                    <h1 className=" text-sm font-bold">Balance</h1>
                </div>
                <div className="h-full w-[226px] bg-balance">
                    <h1 className="text-sm font-bold">Spending</h1>
                </div>
                <div className=" grid-cols-2 grid gap-4 ">
                    <div className="h-[148px] w-[284px] bg-balance"></div>
                    <div className="h-[148px] w-[284px] bg-balance"></div>
                    <div className="h-[148px] w-[284px] bg-balance"></div>
                    <div className="h-[148px] w-[284px] bg-balance"></div>
                </div>

            </div>
        </div>
    )
}

export default Overview