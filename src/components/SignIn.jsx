import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const SignIn = () => {
	const [eye, setEye] = useState(false);
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		const res = await axios.post(import.meta.env.VITE_BASE_URL + "/authentication", {...data, strategy: "local"})
		
		if(res.status === 201 || res.status === 200) {
			const data = await res.data

			localStorage.setItem('auth_data', JSON.stringify(data))
			navigate('/')
		}
	};

	return (
		<form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} >
			<div className="w-full h-[58px] flex items-center gap-[16px] px-[16px] bg-[#2E3558] rounded-[8px]">
				<div className="borderline2 w-[35px] h-[35px] rounded-full flex items-center justify-center">
					<div className="chel w-[13px] h-[13px]"></div>
				</div>
				<input
					type="text"
					{...register("email", { required: true, minLength: 7 })}
					placeholder="E-mail or Login"
					className="bg-transparent w-[80%] outline-none text-[#fff] font-roboto"
				/>
			</div>
			<div className="w-full h-[58px] flex items-center gap-[16px] px-[16px] bg-[#2E3558] rounded-[8px]">
				<div className="borderline2 w-[35px] h-[35px] rounded-full flex items-center justify-center">
					<div className="lock w-[13.5px] h-[13.5px]"></div>
				</div>
				<input
					type={eye ? "text" : "password"}
					{...register("password", { required: true, minLength: 4 })}
					placeholder="Password"
					className="bg-transparent w-[74%] outline-none text-[#fff] font-roboto"
				/>
				<div className="" onClick={() => setEye(!eye)}>
					{eye ? (
						<RemoveRedEyeIcon
							sx={{ filter: "invert(100%)", cursor: "pointer" }}
						/>
					) : (
						<VisibilityOffIcon
							sx={{ filter: "invert(100%)", cursor: "pointer" }}
						/>
					)}
				</div>
			</div>
			<button className="w-full flex items-center justify-center h-[42px] bg-btnBg2 rounded-[8px] text-[#ffffff] font-[700] font-roboto transition-[500ms] hover:invert-[5%]" type="submit" >
				SIGN IN
			</button>
		</form>
	);
};

export default SignIn;
