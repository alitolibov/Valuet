import MarketItem from "../components/MarketItem";

const arr = [
   {
      id: 1,
      name: 'DASH',
      bg: 'rgba(39, 169, 210, 0.5)',
      bg2: '#27A9D2',
      frame: 'Frame',
      proc: '1.93%',
      line: '#00E8AC'
   },
   {
      id: 2,
      name: 'Aeternity',
      bg: 'rgba(235, 131, 56, 0.5)',
      bg2: '#EB8338',
      frame: 'Frame2',
      proc: '-1.14%',
      line: '#F35050'
   },
   {
      id: 3,
      name: 'Ethereum',
      bg: 'rgba(97, 98, 214, 0.5)',
      bg2: '#6162D6',
      frame: 'Frame3',
      proc: '1.14%',
      line: '#00E8AC'
   },
   {
      id: 4,
      name: 'PeerCoin',
      bg: 'rgba(108, 186, 96, 0.5)',
      bg2: '#6CBA60',
      frame: 'Frame4',
      proc: '1.93%',
      line: '#00E8AC'
   },
   {
      id: 5,
      name: 'BitCoin',
      bg: 'rgba(100, 70, 150, 0.5)',
      bg2: '#644696',
      frame: 'Frame5',
      proc: '-1.14%',
      line: '#F35050'
   },
   {
      id: 6,
      name: 'GridCoin',
      bg: 'rgba(188, 86, 97, 0.5)',
      bg2: '#BC5661',
      frame: 'Frame6',
      proc: '1.93%',
      line: '#00E8AC'
   },
   {
      id: 7,
      name: 'NavCoin',
      bg: 'rgba(243, 80, 80, 0.25);',
      bg2: '#F35050',
      frame: 'Frame7',
      proc: '1.93%',
      line: '#00E8AC'
   },
   {
      id: 8,
      name: 'LiteCoin',
      bg: 'rgba(65, 133, 213, 0.5)',
      bg2: '#4185D5',
      frame: 'Frame8',
      proc: '-1.13%',
      line: '#00E8AC'
   },
   {
      id: 9,
      name: 'Nano',
      bg: 'rgba(191, 97, 214, 0.5)',
      bg2: '#BF61D6',
      frame: 'Frame9',
      proc: '1.93%',
      line: '#00E8AC'
   },
]


const Market = () => {
   return ( 
   <>
   <p className="font-openSans font-semibold text-[18px] capitalize text-[#fff] mt-[28px] mb-[16px]">Market</p>
   <div className="grid grid-cols-3 gap-[24px] mb-[26px]">
      {arr.map(item => <MarketItem key={item.id} {...item} />)}
   </div>
   </>
    );
}
 
export default Market;