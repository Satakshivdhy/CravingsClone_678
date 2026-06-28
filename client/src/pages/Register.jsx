import React, { useState } from "react";
import foodTable from "../assets/foodTable.webp";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    pasword: "",
  });

  const [validateError, setValidateError] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
    console.log(registerData);
  };

  const validateRegisterData = (data) => {
    const { fullName, email, phone, gender, dob, password } = data;
    let errorMessage = {};

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      errorMessage.fieldsError = "All Fields Required";
    }
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

    const validateResult = validateRegisterData(registerData);
    if (!validateResult) {
      setValidateError(validateResult);
      return;
    }
    console.log("Registered data submitted:", registerData);
    const payload = {
      fullName: registerData.fullName,
      email: registerData.email.toLowerCase(),
      phone: registerData.phone,
      gender: registerData.gender,
      dob: registerData.dob,
      password: registerData.password,
    };
  };

  return (
    <>
      <div>
        <img src={foodTable} alt="" className="h-[105vh] w-full object-cover" />
        <div className="absolute top-22 right-30">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-[32vw] gap-3  bg-white rounded-[10px] py-4 px-10">
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold text-orange-700 text-center">
                Create Account
              </div>
              <div className="text-center text-gray-500">
                Join us as a Customer, Restaurant, or Rider
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <label htmlFor="user" className="font-semibold">
                  Register as:
                </label>
                <div className="flex gap-7 pb-2">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="user"
                      value={"user"}
                      value="customer"
                      defaultChecked
                    />
                    <span>Customer</span>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="user" value="restaurant" />
                    <span>Restaurant</span>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" name="user" value="rider" />
                    <span>Rider</span>
                  </div>
                </div>
              </div>
              <div className="">
                <input
                  type="text"
                  name="fullName"
                  value={registerData.fullName}
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  className="p-1.5 w-full border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none "
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={registerData.email}
                  onChange={handleChange}
                  className="p-1.5 w-full border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none"
                />
                {validateError?.emailError && (
                  <span className="text-red-500 text-sm">
                    {validateError.emailError}
                  </span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  value={registerData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="p-1.5 w-full border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none"
                />
              </div>
              <div>
                {/* <label className="block mb-2 font-medium">Gender</label> */}

                <select
                  // value={gender}
                  // onChange={(e) => setGender(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-[#6B7280]"
                >
                  <option value="">Select Gender</option>
                  <option value="Male" name="gender">
                    Male
                  </option>
                  <option value="Female" name="gender">
                    Female
                  </option>
                  <option value="Other" name="gender">
                    Other
                  </option>
                </select>

                {/* <p className="mt-4">Selected Gender: {gender}</p> */}
              </div>
              <div>
                <input
                  type="date"
                  name="dob"
                  value={registerData.dob}
                  onChange={handleChange}
                  className="p-1.5 w-full border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none text-[#6B7280]"
                />
              </div>
              <div>
                <input
                  type="password"
                  // id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={registerData.password}
                  onChange={handleChange}
                  className="p-1.5 w-full border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none"
                />
                {validateError?.passwordError && (
                  <span className="text-red-500 text-sm">
                    {validateError.passwordError}
                  </span>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={registerData.pasword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="p-1.5 w-full border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none"
                />
                {validateError?.passwordError && (
                  <span className="text-red-500 text-sm">
                    {validateError.passwordError}
                  </span>
                )}
              </div>
              <div className="py-2">
                <input type="checkbox" />
                <span className="text-gray-500">
                  {" "}
                  I agree to the{" "}
                  <Link className="text-(--primary) hover:underline">
                    terms and conditions.
                  </Link>{" "}
                </span>
              </div>
              <button className="w-full bg-(--primary) rounded-[7px] p-3 text-white font-bold">
                Register
              </button>
              <div className="text-center text-gray-500">
                Already registered?
                <Link
                  to="/login"
                  className="text-(--primary) text-semibold hover:underline"
                >
                  {" "}
                  Login here
                </Link>
              </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
