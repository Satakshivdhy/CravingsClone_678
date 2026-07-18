import React, { useState } from "react";
import foodTable from "../assets/foodTable.webp";
import { Link, useNavigate } from "react-router-dom";
import api from "../config/api.config";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setUser, setIsLogin, isLogin, setRole } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    };

    try {
      const res = await api.post("/auth/login", payload);
      toast.success(res.data.message);

      sessionStorage.setItem("UserData", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);

      if (setRole) {
        setRole(res.data.data.userType);
      }

      if (res.data.data.userType === "rider") navigate("/rider-dashboard");
      if (res.data.data.userType === "admin") navigate("/admin-dashboard");
      if (res.data.data.userType === "customer") navigate("/customer-dashboard");
    } catch (error) {
      toast.error(
        `${error.response?.status || "Error"} | ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <>
      <div className="bg-amber-400">
        <img src={foodTable} alt="" className="h-[90vh] w-full object-cover" />
      </div>
      <div className="h-[70vh] text-[#6B7280] absolute top-35 left-30">
        <div className="w-md bg-white rounded-[10px] shadow px-10 py-7 flex flex-col justify-center gap-3">
          <div className="flex flex-col items-center gap-3">
            <div className="text-3xl text-orange-700 font-bold">
              Welcome Back!
            </div>
            <div>Login to your Cravings account</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-black font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={handleChange}
                  className="border border-[#d7d1cb] p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-orange-700"
                />
                {validateError.email && (
                  <span className="text-red-500 text-sm">
                    {validateError.email}
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="password" className="text-black font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="border border-[#d7d1cb] p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-orange-700"
                />
                {validateError.password && (
                  <span className="text-red-500 text-sm">
                    {validateError.password}
                  </span>
                )}
              </div>

              {/* Remember Me / Forgot Password */}
              <div className="flex justify-between">
                <div>
                  <input type="checkbox" />{" "}
                  <span className="text-gray-600">Remember me</span>
                </div>
                <p className="text-orange-700 hover:underline">
                  Forgot Password?
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 bg-orange-700 text-white font-bold py-3 px-4 rounded hover:bg-orange-800 w-full"
              >
                Login
              </button>

              {/* Register Link */}
              <div className="flex items-center justify-between mt-4">
                <div className="h-px w-[25%] bg-[#c2c4c7]"></div>
                <div className="text-[#6B7280]">Don't have an account?</div>
                <div className="h-px w-[25%] bg-[#c2c4c7]"></div>
              </div>
              <div className="text-orange-700 flex justify-center font-semibold hover:underline">
                <Link to="/register">Create an account</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
