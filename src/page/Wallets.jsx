import React, { useEffect, useRef } from 'react';
import WalletCards from "../components/WalletCards";
import { createChart, ColorType } from 'lightweight-charts';


export const ChartComponent = props => {
    const {
        data,
        colors: {
            backgroundColor = '#2D317A',
            lineColor = '#0089D3FF',
            textColor = 'white',
            areaTopColor = '#2D317A',
            areaBottomColor = '#2D317A',
            
        } = {},
    } = props;

    const chartContainerRef = useRef();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: 500,
                height: 400,
            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
            newSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return (
        <div
            ref={chartContainerRef}
        />
    );
};

const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
];

const Wallets = (props) => {



    return (
        <div className="py-5">
            <span className="font-semibold text-[20px] text-[white]">Wallets</span>

            <div className="mt-[20px] ">
                <div className="cards flex gap-[20px] overflow-x-auto  ">
                    <div className="min-w-[300px] w-[300px] h-[150px] bg-[#0F0B38] rounded-[12px]"></div>
                    <WalletCards bgColor={'violet'} img={"/images/BitCoin.svg"} text='BitCoin' roundColor={'#644696'} ChartImg={'images/chartImg.svg'} />
                    <WalletCards bgColor={'darkBLue'} img={"/images/Ethereum.svg"} text='Ethereum' rroundColor={'#5454BD'} ChartImg={'images/chartImg.svg'} />
                    <WalletCards bgColor={'darkBLue'} img={"/images/Ethereum.svg"} text='Ethereum' rroundColor={'#5454BD'} ChartImg={'images/chartImg.svg'} />
                </div>
            </div>

            <ChartComponent {...props} data={initialData}></ChartComponent>

        </div>
    );
}

export default Wallets;