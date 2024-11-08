"use client";

import Image from "next/image";
import lock from "@/public/assets/lock.svg";
import email from "@/public/assets/email.svg";
import arrowRight from "@/public/assets/arrowRight.svg";
import { socailIcons } from "@/constants";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignInUserMutation } from "@/api/authApi";
import { selectLoader, setLoader } from "@/redux/features/loaderSlice";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";
import { setSignInUser, setSignUpUser } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signInUser] = useSignInUserMutation();

  const { componentLoading } = useAppSelector(selectLoader);

  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (userData) => {
    try {
      dispatch(setLoader("sign-in"));
      dispatch(setSignInUser(null));
      const userDetails = await signInUser(userData);
      console.log({ userDetails });

      const { data }: any = userDetails;

      if (data) {
        if (data.msg == "Invalid password") {
          toast.error(data.msg);
          return;
        } else if (data.message == "Log in successful") {
          toast.success("Signed In Successfully");
          dispatch(setSignInUser(data));
          dispatch(setSignUpUser(null));
          router.push("/home");
        } else {
          toast.error("Invalid credential");
        }
      }
    } catch (error) {
      console.log({ error });
    } finally {
      dispatch(setLoader(""));
    }
  };

  return (
    <div className="bg-blue w-full md:mb-20 max-w-[33em] mx-auto bg-white text-[.9em] md:text-[1em] rounded-t-3xl md:rounded-b-3xl">
      <form onSubmit={handleSubmit(onSubmit)} className="p-10">
        <p className="text-3xl font-bold text-brown-80 p-10 text-center">
          Sign In
        </p>
        <div className="my-5">
          <label className="font-semibold text-black my-5">Email Address</label>
          <div className="w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]">
            <Image
              src={email}
              alt="lock"
              width={25}
              height={25}
              className="m-3"
            />
            <input
              type="email"
              {...register("email", { required: true })}
              className="outline-none w-[80%]"
              placeholder="user@gmail.com"
            />
          </div>
        </div>
        <div className="my-5">
          <label className="font-semibold text-black my-5">Password</label>
          <div className="w-full h-[3.5em] mx-auto flex rounded-full shadow-box-shadow border-[1px]">
            <Image
              src={lock}
              alt="lock"
              width={25}
              height={25}
              className="m-3"
            />
            <input
              type="password"
              {...register("password", { required: true })}
              className="outline-none w-[80%]"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="my-10">
          <button className="w-full h-[3.5em] bg-primary rounded-full text-white font-bold flex items-center justify-center gap-3">
            {componentLoading === "sign-in" ? (
              <Oval
                height="40"
                width="40"
                color="#fff"
                secondaryColor="#fff"
                strokeWidth="5"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <>
                Sign In{" "}
                <Image
                  src={arrowRight}
                  alt="arrow-right"
                  width={30}
                  height={30}
                />
              </>
            )}
          </button>
          <div className=" flex m-10 justify-around w-[15em] mx-auto">
            {socailIcons.map((icon) => (
              <div
                key={icon.alt}
                className="h-[4em] w-[4em] rounded-full border-[1px] flex items-center justify-center border-brown-80"
              >
                <Image src={icon.src} alt={icon.alt} width={25} height={25} />
              </div>
            ))}
          </div>
          <div className="text-center font-medium">
            <p>
              Dont have an account?{" "}
              <Link href="/sign-up">
                <span className="text-primary underline cursor-pointer">
                  Sign Up.
                </span>
              </Link>
            </p>
            <p className="text-primary cursor-pointer">Forgot Password</p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Page;
