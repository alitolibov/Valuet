import { BsArrowUp } from 'react-icons/bs'


const Transaction = ({deg, color}) => {
    return (
        <>
            <div className='plus flex items-center justify-between py-3  '>

                <div className='flex items-center'>

                    <p className='text-[gray] font-semibold text-[18px]'>AM 01:16</p>

                    <div className='w-[40px] h-[40px]  rounded-[100%] border-[3px] border-[#1256A2FF] flex items-center pl-[5px] ml-[20px]'>
                        <BsArrowUp style={{ transform: `rotate(${deg}deg)` }} size={25} color={color} />
                    </div>

                    <div className='ml-[20px]'>
                        <p className='font-semibold text-[white] text-[18px]'>Received BitCoin</p>
                        <p className='text-[white]'>From Elon Musk</p>
                    </div>
                </div>

                <p className='text-[white] font-semibold text-[18px]'>+4,800</p>

            </div>
        </>
    );
}

export default Transaction;