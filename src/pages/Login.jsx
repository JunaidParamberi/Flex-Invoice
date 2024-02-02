import React, { useEffect, useState } from "react";
import mainLogowhte from "../assets/main-logo-white.svg";
import vector from "../assets/invoice-vector.svg";
import google from "../assets/google-icon.png";
import microsoft from "../assets/Microsoft_icon.png";
import show from "../assets/show.svg";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../services/Firebase";
import CompanyProfile from "./CompanyProfile";

function SignIn({
  showPassword,
  setChangeMode,
  handelGoogle,
  setShowPassword,
  updateProfile,
}) {
  return (
    <>
      {
        <div className="input-container bg-white w-1/2 rounded-tl-[70px] rounded-bl-[70px] flex justify-center items-center ">
          <div className=" signup-inputs w-[60%]">
            <h3 className="text-indigo-950 text-[25px] font-semibold tracking-wide mb-[20px]">
              Log in
            </h3>
            <div className="third-party-auth flex justify-between ">
              <div
                onClick={handelGoogle}
                className="google cursor-pointer w-[210px] h-[45px] bg-white rounded-[9px] border border-indigo-950 flex p-[10px] gap-[6px] justify-center item-center "
              >
                <img src={google} alt="" />
                <h3 className="text-indigo-950 text-[15px] font-normal ">
                  Sign up with Google{" "}
                </h3>
              </div>
              <div className="microsoft  justify-center cursor-pointer w-[210px] h-[45px] bg-white rounded-[9px] border border-indigo-950 flex p-[10px] gap-[6px] item-center ">
                <img src={microsoft} alt="" />
                <h3 className="text-indigo-950 text-[15px] font-normal ">
                  Sign up with Microsoft{" "}
                </h3>
              </div>
            </div>

            <p className=" or-text">or</p>

            <form className="flex flex-col gap-[20px] mt-[40px]" action="">
              <input
                className="  border-b border-b-indigo-950 outline-none p-[10px] text-[#090852] "
                type="email"
                placeholder="E-mail"
                autoComplete="email"
              />

              <div className="relative border-b border-b-indigo-950">
                <input
                  className="w-[90%]  outline-none p-[10px] focus:outline-none  text-[#090852] "
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="new-password"
                />
                <img
                  className=" cursor-pointer w-[20px] absolute right-0 top-0 mt-[15px] mr-[10px]"
                  src={show}
                  alt=""
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>

              <button className=" text-white bg-[#090852] p-[10px] rounded-[9px]">
                Log in
              </button>
            </form>

            <h4 className="text-neutral-500 text-[15px] font-normal w-full flex justify-center gap-[5px] mt-[10px]">
              Don't have an account?{" "}
              <a
                onClick={() => setChangeMode((prevState) => !prevState)}
                className="text-indigo-950 text-[15px] font-semibold cursor-pointer underline"
              >
                Register{" "}
              </a>
            </h4>
          </div>
        </div>
      }
    </>
  );
}

function Login() {
  const selectStyle = {
    color: "#9CA3AF",
  };

  const [changeMode, setChangeMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [updateProfile, setUpdateProfile] = useState(false);

  const provider = new GoogleAuthProvider();

  const handelGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //auth functions

  const handleSignUp = async (e) => {
    e.preventDefault();
    setUpdateProfile(false);

    if (companyName && email && mobileNumber && password && country) {
      try {
        // Create user account
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log(user, "sign up successfully");

        // Send email verification
        await sendEmailVerification(user);
        console.log("email verification sent");

        // Clear input values
        setCompanyName("");
        setEmail("");
        setMobileNumber("");
        setCountry("");
        setPassword("");
        setUpdateProfile(true);
      } catch (err) {
        console.error(err.message);
        setUpdateProfile(false);
      }
    } else {
      console.log("Fill in all the inputs");
    }
  };

  return (
    <div className="bg-[#090852] min-h-screen min-w-full flex justify-between ">
      <div className=" p-10 flex flex-col justify-center ml-20 ">
        <img className="w-80 mb-[20px]" src={mainLogowhte} alt="" />
        <h2 className="text-white text-xl font-thin mt-2">
          "Smart Invoicing, Seamless Accounting – Flex Invoice."
        </h2>
        <img className="w-[400px] mt-[50px] " src={vector} alt="" />
      </div>
      {updateProfile && <CompanyProfile />}
      {changeMode ? (
        !updateProfile && (
          <div className=" input-container bg-white w-1/2 rounded-tl-[70px] rounded-bl-[70px] flex justify-center items-center ">
            <div className=" signup-inputs w-[60%]">
              <h3 className="text-indigo-950 text-[25px] font-semibold tracking-wide mb-[20px]">
                Register
              </h3>
              <div className="third-party-auth flex justify-between ">
                <div
                  onClick={handelGoogle}
                  className="google cursor-pointer w-[210px] h-[45px] bg-white rounded-[9px] border border-indigo-950 flex p-[10px] gap-[6px] justify-center item-center "
                >
                  <img src={google} alt="" />
                  <h3 className="text-indigo-950 text-[15px] font-normal ">
                    Sign up with Google{" "}
                  </h3>
                </div>
                <div className="microsoft  justify-center cursor-pointer w-[210px] h-[45px] bg-white rounded-[9px] border border-indigo-950 flex p-[10px] gap-[6px] item-center ">
                  <img src={microsoft} alt="" />
                  <h3 className="text-indigo-950 text-[15px] font-normal ">
                    Sign up with Microsoft{" "}
                  </h3>
                </div>
              </div>

              <p className=" or-text">or</p>

              <form className="flex flex-col gap-[30px] mt-[40px]" action="">
                <input
                  className="   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
                  type="text"
                  placeholder="Company Name"
                  autoComplete="organization"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                />
                <input
                  className="  border-b border-b-indigo-950 outline-none p-[10px] text-[#090852] "
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className="  border-b border-b-indigo-950 outline-none p-[10px] text-[#090852] "
                  type="tel"
                  placeholder="Mobile Number "
                  autoComplete="tel"
                  onChange={(e) => setMobileNumber(e.target.value)}
                  value={mobileNumber}
                />
                <div className="relative border-b border-b-indigo-950">
                  <input
                    className="w-[90%]  outline-none p-[10px] focus:outline-none  text-[#090852] "
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <img
                    className=" cursor-pointer w-[20px] absolute right-0 top-0 mt-[15px] mr-[10px]"
                    src={show}
                    alt=""
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                </div>

                <select
                  style={selectStyle}
                  className="border-b border-b-indigo-950 outline-none p-[10px] text-[#090852]"
                  id="country"
                  autoComplete="country"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                >
                  <option className="border-b border-b-indigo-950 outline-none p-[10px] text-grey">
                    -- Select a Country --
                  </option>
                  <option value="UAE">United Arab Emirates</option>
                  <option value="IND">India</option>
                  <option value="US">United States</option>
                  <option value="KSA">Saudi Arabia</option>
                  <option value="QTA">Qatar</option>
                  <option value="OMA">Oman</option>
                </select>

                <button
                  onClick={handleSignUp}
                  className=" text-white bg-[#090852] p-[10px] rounded-[9px]"
                >
                  Create Account
                </button>
              </form>

              <h4 className="text-neutral-500 text-[15px] font-normal w-full flex justify-center gap-[5px] mt-[10px]">
                Already have an account?{" "}
                <a
                  onClick={() => setChangeMode((prevState) => !prevState)}
                  className="text-indigo-950 text-[15px] font-semibold cursor-pointer underline"
                >
                  Log in{" "}
                </a>
              </h4>
            </div>
          </div>
        )
      ) : (
        <SignIn
          handelGoogle={handelGoogle}
          changeMode={changeMode}
          setChangeMode={setChangeMode}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          updateProfile={updateProfile}
        />
      )}
    </div>
  );
}

export default Login;
