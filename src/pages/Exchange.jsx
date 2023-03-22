import { useEffect, useState } from "react";
import Bitcoin from "../../public/images/Bitcoin.svg";
import gridCoin from "../../public/images/Cripta.svg";
import bitcoinIcon from "../../public/images/bitcoinIcon.svg";
import Arrow from "../../public/images/Arrow.svg";
import gridCoinIcon from "../../public/images/gridCoin.svg";
// import {LoadingButton} from '@mui/lab/LoadingButton'

const Exchange = () => {
	const [to, setTo] = useState("");
	const [from, setFrom] = useState("");
	const [amount, setAmount] = useState(0);
	const [currencies, setCurrencies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let locData = JSON.parse(localStorage.getItem("currencies"));

		if (!locData) {
			var myHeaders = new Headers();
			myHeaders.append("apikey", import.meta.env.VITE_API_KEY);

			var requestOptions = {
				method: "GET",
				redirect: "follow",
				headers: myHeaders,
			};

			fetch("https://api.apilayer.com/currency_data/list", requestOptions)
				.then((response) => response.text())
				.then((res) => {
					localStorage.setItem("currencies", JSON.stringify(res));
					let arr = Object.entries(res.currencies);
					setCurrencies(arr);
				})
				.catch((error) => console.log("error", error));
		} else {
			let arr = Object.entries(JSON.parse(locData).currencies);
			setCurrencies(arr);
		}
	}, []);

	function exchangeSum() {
		var myHeaders = new Headers();
		myHeaders.append("apikey", import.meta.env.VITE_API_KEY);

		var requestOptions = {
			method: "GET",
			redirect: "follow",
			headers: myHeaders,
		};

		setLoading(true);

		fetch(
			`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error))
			.finally(() => setLoading(false));
		console.log("works");
	}

	return (
		<>
			<div className="mt-[28px] font-openSans">
				<h1 className="text-[#ffffff] text-[18px] font-semibold mb-[20px]">
					Exchange
				</h1>
				<div className="flex justify-between gap-4 w-full mb-[24px]">
					<div className="w-full">
						<h6 className="text-[#616A8B] text-[14px]">From</h6>
						<div className="w-full h-[256px] bg-blockColor rounded-[5px] shadow-3xl px-7 pt-[32px]">
							<div className="flex justify-between ">
								<select
									onChange={(e) => setFrom(e.target.value)}
									className="text-[24px] text-[#ffffff] border-none bg-transparent h-[88px]"
								>
									{currencies.map((item, idx) => (
										<option key={idx} value={item[0]}>
											{item[0]}
										</option>
									))}
								</select>
								<img src={Bitcoin} alt="" />
							</div>
							<input
								onKeyUp={(e) => setAmount(e.target.value)}
								className="text-[#ffffff] w-full h-[46px] rounded-[5px] bg-[#32395E]  border-b-2  border-b-[#1288E8] placeholder:text-[#FFFFFF] text-[24px] font-light px-3"
								type="text"
								placeholder="0.45234 BTC"
							/>
						</div>
					</div>
					<div className="w-full">
						<h6 className="text-[#616A8B] text-[14px]">To</h6>
						<div className="w-full h-[256px] bg-blockColor rounded-[5px] shadow-3xl px-7 pt-[32px]">
							<div className="flex justify-between  ">
								<select
									onChange={(e) => setTo(e.target.value)}
									className="text-[24px] text-[#ffffff] border-none bg-transparent h-[88px]"
								>
									{currencies.map((item, idx) => (
										<option key={idx} value={item[0]}>
											{item[0]}
										</option>
									))}
								</select>
								<img src={gridCoin} alt="" />
							</div>
							<input
								className="text-[#ffffff] w-full h-[46px] rounded-[5px] bg-[#32395E]  border-b-2 border-b-[#1288E8] placeholder:text-[#FFFFFF] text-[24px] font-light px-3"
								type="text"
								placeholder="1.45534 GRC"
							/>
						</div>
					</div>
				</div>

				<div className="w-[100%] h-[123px] bg-itemColor rounded-[5px] shadow-3xl flex justify-center">
					<h1 className="text-[#ffffff] text-[24px] font-bold mt-[39px]">
						0.45234 BTC
					</h1>
					<img className="w-[69px]" src={bitcoinIcon} alt="" />
					<img className="w-[184px]" src={Arrow} alt="" />
					<img className="w-[59px]" src={gridCoinIcon} alt="" />
					<h1 className="text-[#ffffff] text-[24px] font-bold mt-[39px]">
						1.45534 GRC
					</h1>
				</div>

				<center>
                    <button
                        onClick={exchangeSum}
                    >
                        {
                            loading ? "loading..." : "Exchange"
                        }

                    </button>
					{/* <LoadingButton
						size="small"
						onClick={exchangeSum}
						loading={loading}
						variant="outlined"
						disabled
					>
                        Exchange
					</LoadingButton> */}
				</center>
			</div>
		</>
	);
};

export default Exchange;
