import React, { useEffect, useRef } from 'react';
import WalletCards from "../components/WalletCards";
import { createChart, ColorType } from 'lightweight-charts';
import { BsArrowUp } from 'react-icons/bs'
import Transaction from '../components/Transaction';

export const ChartComponent = props => {
    const {
        data,
        colors: {
            backgroundColor = 'transparent',
            lineColor = '#0089D3FF',
            textColor = '#54669C',
            areaTopColor = 'transparent',
            areaBottomColor = 'transparent',

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
    { time: '2023-06-22', value: 5000 },
    { time: '2023-07-23', value: 7000 },
    { time: '2023-08-24', value: 5500 },
    { time: '2023-09-25', value: 8200 },
    { time: '2023-10-26', value: 6000 },
    { time: '2023-11-27', value: 7000 },
    { time: '2023-12-28', value: 3800 },
    { time: '2023-12-29', value: 8000 },
];

const Wallets = (props) => {



    return (
        <div className="py-5 ">
            <span className="font-semibold text-[20px] text-[white]">Wallets</span>

            <div className="my-[20px]">
                <div className="cards flex gap-[20px] overflow-x-auto  ">
                    <div className="min-w-[300px] w-[300px] h-[150px] bg-[#0F0B38] rounded-[12px]"></div>
                    <WalletCards bgColor={'linear-gradient(237.07deg, rgba(96, 67, 146, 0.5) -8.06%, rgba(15, 11, 56, 0.5) 96.63%)'} img={"/images/BitCoin.svg"} text='BitCoin' roundColor={'#644696'} ChartImg={'images/chartImgViolet.svg'} />
                    <WalletCards bgColor={'linear-gradient(237.07deg, #6162D6 -8.06%, #0F0B38 96.63%)'} img={"/images/Ethereum.svg"} text='Ethereum' roundColor={'#5454BD'} ChartImg={'images/chartImgBlue.svg'} />
                    <WalletCards bgColor={'linear-gradient(237.07deg, #72EB38 -8.06%, #0F0B38 96.63%)'} img={"/images/PeerCoin.svg"} text='PeerCoin' roundColor={'#6CBA60'} ChartImg={'images/chartImgGreen.svg'} />
                </div>
            </div>

            <div className='flex justify-between max-w-[1280px] min-w-[1280px]' >

                <div className='w-[500px] h-[400px] bg-[linear-gradient(176.95deg, rgba(27, 18, 78, 0.2) -32.8%, #0F0B38 88.83%)] shadow-[linear-gradient(176.95deg, rgba(27, 18, 78, 0.2) -32.8%, #0F0B38 88.83%)]'>
                    <ChartComponent {...props} data={initialData}></ChartComponent>
                </div>


                <div className='bg-[#0F0B38] px-4 rounded-[10px]'>
                    <div className='border-b-[2px] border-[#2D317AFF] py-4'>
                        <p className='font-medium text-[white] text-[20px]'>RESENT TRANSACTIONS</p>
                    </div>

                    <div className='transaction w-[600px] h-[320px]  overflow-y-auto  '>

                        <Transaction deg={'0'} color={'#02D0A0FF'} />
                        <Transaction deg={'0'} color={'#02D0A0FF'} />
                        <Transaction deg={'180'} color={'red'} />
                        <Transaction deg={'0'} color={'#02D0A0FF'} />
                        <Transaction deg={'0'} color={'#02D0A0FF'} />
                        <Transaction deg={'180'} color={'red'} />
                        <Transaction deg={'0'} color={'#02D0A0FF'} />
                        <Transaction deg={'0'} color={'#02D0A0FF'} />
                        <Transaction deg={'180'} color={'red'} />


                    </div>

                </div>





            </div>


        </div>
    );
}

export default Wallets;