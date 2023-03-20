import { Route, Routes } from "react-router-dom"
import { useState } from 'react';
import CoinCart from "../components/CoinCart";
import NewsItem from "../components/NewsItem";
import SelectUM from "../components/SelectUM";
// import Chart from 'chart.js';


function Overview() {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const [Coin, setCoin] = useState(arr)
    // const ctx = document.getElementById('myChart');
    // new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //       datasets: [{
    //         label: '# of Votes',
    //         data: [12, 19, 3, 5, 2, 3],
    //         borderWidth: 1
    //       }]
    //     },
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true
    //         }
    //       }
    //     }
    //   });

    return (
        <div className="font-openSans text-white max-w-[1200px]  pt-7">
            <div className=" flex  justify-between">
                <div className="flex items-center gap-10 font-semibold">
                    <h1 className="text-white text-lg  font-semibold ">Overview</h1>
                    <span className=" text-sm text-[#54669C]  ">25 october, Sunday</span>
                </div>
                <button className="text-white  w-[125px] bg-gradient-to-r from-cyan-500 to-blue-500 h-8 text-sm font-bold rounded-3xl">Add widget</button>
            </div>
            <div className="h-[312px] flex gap-4 justify-between mt-6 ">
                <div className="h-full w-[226px] px-6 py-4  bg-darkBLue2">
                    <h1 className=" text-sm font-bold">Balance</h1>
                    {/* <div>
                        <canvas id="myChart"></canvas>
                    </div> */}
                </div>
                <div className="h-full w-[240px] px-6 py-4 bg-darkBLue2">
                    <div className=" flex justify-between">
                        <h1 className="text-sm font-bold">Spending</h1>
                        <select className=" text-white  bg-transparent" name="" id="">
                            <option className=" text-black" value="January">January</option>
                            <option className=" text-black" value="February ">February </option>
                            <option className=" text-black" value="March ">March </option>
                            <option className=" text-black" value="April ">April </option>
                            <option className=" text-black" value="May ">May </option>
                            <option className=" text-black" value="June ">June </option>
                            <option className=" text-black" value="July ">July </option>
                            <option className=" text-black" value="August ">August </option>
                            <option className=" text-black" value="September ">September </option>
                            <option className=" text-black" value="October ">October </option>
                            <option className=" text-black" value="November ">November </option>
                            <option className=" text-black" value="December ">December </option>
                        </select>
                        
                    </div>
                    <div className=" mt-8">
                        <p className=" text-base font-bold">$ 5,743.35</p>
                        <p className=" text-[8px] font-light mt-1  text-white">total spending</p>
                    </div>
                </div>
                <div className=" grid-cols-2 grid gap-4  ">
                    {
                        Coin.slice(0, 4).map(item => <CoinCart key={item} />)
                    }
                </div>

            </div>
            <div className="flex h-[232px] justify-between  gap-4 mt-6">
                <div className=" h-full px-6 py-4  w-[665px] bg-darkBLue2">
                    <div className="flex justify-between">
                        <div className="flex gap-6">
                            <h1 className="text-sm font-bold">Market</h1>
                            <select className=" text-white  bg-transparent" name="" id="">
                                <option className=" text-black" value="January">January</option>
                                <option className=" text-black" value="February ">February </option>
                                <option className=" text-black" value="March ">March </option>
                                <option className=" text-black" value="April ">April </option>
                                <option className=" text-black" value="May ">May </option>
                                <option className=" text-black" value="June ">June </option>
                                <option className=" text-black" value="July ">July </option>
                                <option className=" text-black" value="August ">August </option>
                                <option className=" text-black" value="September ">September </option>
                                <option className=" text-black" value="October ">October </option>
                                <option className=" text-black" value="November ">November </option>
                                <option className=" text-black" value="December ">December </option>
                            </select>
                        </div>
                        <select className=" text-white  bg-transparent" name="" id="">
                            <option className=" text-black" value="January">January</option>
                            <option className=" text-black" value="February ">February </option>
                            <option className=" text-black" value="March ">March </option>
                            <option className=" text-black" value="April ">April </option>
                            <option className=" text-black" value="May ">May </option>
                            <option className=" text-black" value="June ">June </option>
                            <option className=" text-black" value="July ">July </option>
                            <option className=" text-black" value="August ">August </option>
                            <option className=" text-black" value="September ">September </option>
                            <option className=" text-black" value="October ">October </option>
                            <option className=" text-black" value="November ">November </option>
                            <option className=" text-black" value="December ">December </option>
                        </select>
                    </div>

                </div>
                <div className=" h-full px-6 py-4  w-[410px] bg-darkBLue2 overflow-hidden relative">
                    <h1 className="text-sm font-bold  pb-2 border-solid border-b-[1px] border-[#2D317A]">Recent news</h1>
                    <div className=" mt-4 overflow-y-scroll h-full scrollNone flex flex-col gap-3 ">

                        {
                            Coin.map(item => <NewsItem key={item} />)
                        }
                    </div>
                    <div className=" absolute bottom-0 left-0 bg-scrollBg  h-16 w-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Overview