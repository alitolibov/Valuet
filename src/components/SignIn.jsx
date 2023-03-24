import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link , useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const [eye, setEye] = useState(false);
  let a= [
   {email: 'vv475787@648id.com', name: 'Amin', password: 'dwdwdwdwaddadw'},
   {email: 'vv475787@648id.com', name: 'Amin', password: 'dwdwdwdwaddadw'},
   {email: 'vv475787@648i.com', name: 'Amin', password: 'dwdwdwdwaddadw'},
   {email: 'vv475787@648id.com', name: 'Amin', password: 'dwdwdwdwaddadw'},
  ]
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
   let fill = a.filter(item => item.email === data.email && item.password === data.password)

   if(fill.length > 0){
      toast('Welcome ' + fill[0].name)
      navigate('/')
   }else if(fill.length === 0){
      toast('register plz')
   }

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full h-[58px] flex items-center gap-[16px] px-[16px] bg-[#2E3558] rounded-[8px]">
        <div className="borderline2 w-[35px] h-[35px] rounded-full flex items-center justify-center">
          <div className="chel w-[13px] h-[13px]"></div>
        </div>
        <input
          {...register("email", { required: true, minLength: 8 })}
          type="text"
          placeholder="E-mail or Login"
          className="bg-transparent w-[80%] outline-none text-[#fff] font-roboto"
        />
      </div>
      <div className="w-full h-[58px] flex items-center gap-[16px] px-[16px] bg-[#2E3558] rounded-[8px]">
        <div className="borderline2 w-[35px] h-[35px] rounded-full flex items-center justify-center">
          <div className="lock w-[13.5px] h-[13.5px]"></div>
        </div>
        <input
          {...register("password", { required: true, minLength: 8 })}
          type={eye ? "text" : "password"}
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
      <button className="w-full flex items-center justify-center h-[42px] bg-btnBg2 rounded-[8px] text-[#ffffff] font-[700] font-roboto transition-[500ms] hover:invert-[5%]">
        {" "}
        SIGN IN
      </button>
      {/* <Link
        to={"/"}
        className="w-full flex items-center justify-center h-[42px] bg-btnBg2 rounded-[8px] text-[#ffffff] font-[700] font-roboto transition-[500ms] hover:invert-[5%]"
      >
        SIGN IN
      </Link> */}
    </form>
  );
};

export default SignIn;
