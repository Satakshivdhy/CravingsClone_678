// import { useState } from "react";
import React ,{useState} from "react";
import foodTable from "../assets/foodTable.webp";


// export default Login;

// import React, { useState } from "react";
// import deliveryboy from "../assets/deliberyboy.png";

const Login = () => {
const [loginData, setLoginData] = useState({
email: "",
password: "",
});

const [validateError, setValidateError] = useState();

const handleChange = (e) => {
const name = e.target.name;
const value = e.target.value;

setLoginData((prevData) => ({ ...prevData, [name]: value }));
console.log(loginData);

};

  const validateLoginData = (data) => {
    const { email, password } = data;

    let errorMessage = {};

    if (email.length < 8) {
      errorMessage.emailError = "Email too Short";
    }
    if (password.length < 6) {
      errorMessage.passwordError = "Password too Short";
    }

    return Object.keys(errorMessage).length > 0 ? false : errorMessage;
  };

const handleSubmit = async (e) => {
e.preventDefault();
// Handle login logic here, e.g., send loginData to the server
//Validate loginData

    const validateResult = validateLoginData(loginData);
    if (!validateResult) {
      setValidateError(validateResult);
      return;
    }

console.log("Login data submitted:", loginData);

const payload = {
email: loginData.email.toLowerCase(),
password: loginData.password,
};
};

return (
<>
<div className="  bg-amber-400 "><img src={foodTable} alt="" className="h-[90vh] w-full object-cover" /></div>
<div className="h-[70vh] text-[#6B7280]  absolute top-35 left-35">
<div className="w-md bg-(--background) rounded-[10px] shadow px-10 py-7 flex flex-col justify-center gap-3">
<div className="flex flex-col items-center gap-3">
<div className="text-3xl text-orange-700 font-bold ">Welocome Back!</div>
<div>Login to your Cravings account</div>
</div>

<form onSubmit={handleSubmit}>
  <div className="flex flex-col gap-3">
<div className="flex flex-col gap-2">
<label htmlFor="email" className="text-black">Email</label>
<input
type="email"
id="email"
name="email"
placeholder="Enter your email"
value={loginData.email}
onChange={handleChange}
className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
/>
              {
                validateError?.emailError && (
                  <span className="text-red-500 text-sm">
                    {validateError.emailError}
                  </span>
                )
              }
</div>
<div className="flex flex-col gap-2 mt-4">
<label htmlFor="password" className="text-black">Password</label>
<input
type="password"
id="password"
name="password"
placeholder="Enter your password"
value={loginData.password}
onChange={handleChange}
className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
/>
              {
                validateError?.passwordError && (
                  <span className="text-red-500 text-sm">
                    {validateError.passwordError}
                  </span>
                )
              }
</div>
<div className="flex justify-between">
  <div><input type="checkbox" /> <span className="text-">Remember me</span></div>
  <p className="text-orange-700 hover:underline">Forgot Password?</p>
</div>
<button
type="submit"
className="mt-6  bg-orange-700 text-white font-bold py-3 px-4 rounded hover:bg-(--accent) w-full"
>
Login
</button>

<div className="flex items-center">
  <div className="h-[1px] w-[30%] bg-[#6B7280]"></div>
  <div className="text-[#6B7280]">Don't Have account?</div>
  <div className="h-[1px] w-[30%] bg-[#6B7280]"></div>

  <div></div>
</div>
<div className="text-orange-700 flex justify-center"> <p>Create an acount</p></div>
</div>
</form>
</div>
</div>
</>
);
};

export default Login;
