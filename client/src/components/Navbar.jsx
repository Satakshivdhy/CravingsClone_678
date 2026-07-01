import React from "react";
import {Link} from "react-router-dom";
import { useEffect , useState} from "react";
import transparentLogo from "../assets/transparentLogo.png"

const Navbar = () => {
  const [userData, setUserData] = useState("");
   useEffect(() => {
      setUserData(JSON.parse(sessionStorage.getItem("UserData")));
    }, []);
  return (
    <>
      <div className="h-16 bg-[#C2410C] relative px-12 flex items-center justify-between sticky top-0 z-999">
        <Link to='/' ><img src={transparentLogo} alt="" className="abosolute w-22" /></Link>
        <div className="flex gap-3 items-center pr-4">
            {/* <Link to='/'> Home</Link> */}
            <Link to='/login' className="text-white px-2.5 py-1 hover:border hover:rounded"> Login</Link>
            <Link to='/register' className="text-[#C2410C] bg-amber-50 px-3 py-1 border rounded hover:border-white hover:bg-[#C2410C] hover:text-white">Register</Link>
            {/* <Link to='/contact-us'>Contact Us</Link> */}
            {/* <div className="w-15 h-15 rounded-full overflow-hidden">
        <img
          src={userData.photo}
          alt=""
          className="w-full h-full object-cover"
        />
      </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

