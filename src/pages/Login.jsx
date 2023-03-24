import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Login = () => {
	const [show, setShow] = useState(true);

	return (
		<div className="w-full h-[100vh] bg-logBg relative overflow-hidden">
			<div className="bgback w-[1338.5px] h-[557px] bg-contain absolute bottom-0 right-0"></div>
			<div className="bgtop w-[1082px] h-[766px] absolute bottom-0 right-0"></div>
			<div className="triangleBlue bottom-[159px] right-[487.27px]"></div>
			<div className="flex items-center gap-[259px] mx-auto w-fit mt-[69px]">
				<div className="w-[480px] h-[595px] pt-[82px] px-[50px] rounded-[8px] bg-loginBg drop-shadow-loginShadow">
					<p className="text-[36px] font-[500] font-roboto text-[#fff] text-center mb-[62px]">
						Welcome!
					</p>
					<div
						className="flex flex-col w-full gap-[26px]"
						style={
							show
								? { marginBottom: "103px" }
								: { marginBottom: "53px" }
						}
					>
						{show ? <SignIn /> : <SignUp />}
					</div>
					{show ? (
						<p
							onClick={() => setShow(false)}
							className="text-[#5FB2FF] text-center underline underline-offset-1 font-roboto cursor-pointer transition-[500ms] hover:invert-[5%]"
						>
							New a Valuet? Create an account.
						</p>
					) : (
						<p
							onClick={() => setShow(true)}
							className="text-[#5FB2FF] text-center underline underline-offset-1 font-roboto cursor-pointer transition-[500ms] hover:invert-[5%]"
							id="have"
						>
							Already have an account?
						</p>
					)}
				</div>
				<div className="flex flex-col gap-[20px]">
					<p className="title2 font-raleway">valuet</p>
					<div className="w-[175px] h-[2px] borderline mx-auto"></div>
					<p className="font-roboto font-[300] text-[#fff] textShadow text-[24px] text-center">
						Your currency dashboard
					</p>
				</div>
			</div>
			<div className="triangleOrange top-[141px] left-[160px]"></div>
			<div className="reactangleblue top-[90px] left-[666px]"></div>
		</div>
	);
};

export default Login;
