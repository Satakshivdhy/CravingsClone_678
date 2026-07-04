import React from "react";
import { Link, useNavigate } from "react-router-dom";
import transparentLogo from "../assets/transparentLogo.png";
import { useAuth } from "../context/AuthContext";
import { AiOutlineLogout } from "react-icons/ai";
import api from "../config/api.config.js";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, setUser, isLogin, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      sessionStorage.removeItem("UserData");
      setIsLogin(false);
      setUser(false);
      navigate("/");
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        error.response.status + " | " + error.response?.data?.message ||
          error.message,
      );
    }
  };
  return (
    <>
      <div className="h-16 bg-[#C2410C] relative px-12 flex items-center justify-between sticky top-0 z-999">
        <Link to="/">
          <img src={transparentLogo} alt="" className="abosolute w-22" />
        </Link>
        <div className="flex gap-3 items-center pr-4">
          {/* <Link to='/'> Home</Link> */}
          {isLogin ? (
            <div className=" flex justify-center items-center gap-4 ">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={user.photo}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <Link
                to={"/user/dashboard"}
                className="hover:shadow-2xs  text-white" //hover:text-(--accent)
              >
                {user.fullName.toUpperCase()}
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-300 hover:text-red-500 flex items-center"
              >
                {" "}
                <p>Logout</p>
                <AiOutlineLogout />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white px-2.5 py-1 hover:border hover:rounded"
              >
                {" "}
                Login
              </Link>
              <Link
                to="/register"
                className="text-[#C2410C] bg-amber-50 px-3 py-1 border rounded hover:border-white hover:bg-[#C2410C] hover:text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
