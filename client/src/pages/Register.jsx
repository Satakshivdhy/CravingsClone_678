import React, { useState } from "react";
import foodTable from "../assets/foodTable.webp";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../config/api.config.js";
import toast from "react-hot-toast";

const Register = () => {
  const userType = useParams().userType;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
    userType: userType || "customer",
    agreeTerms: false,
  });

  const [validateError, setValidateError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUserTypeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      userType: e.target.value,
    }));
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    if (!data.phone.trim()) newErrors.phone = "Phone number is required";
    if (!data.gender) newErrors.gender = "Gender is required";
    if (!data.dob) newErrors.dob = "Date of birth is required";
    if (!data.password || data.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!data.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!data.agreeTerms)
      newErrors.agreeTerms = "You must agree to terms and conditions";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidateError({});
    setLoading(true);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setValidateError(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const res = await api.post("/auth/register", {
        ...formData,
        email: formData.email.toLowerCase(),
      });
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "p-1.5 w-full border-[#F2EBE3] rounded-[7px] border focus:border-orange-700 focus:ring-0 focus:outline-none";

  return (
    <>
      <div>
        <img src={foodTable} alt="" className="h-[105vh] w-full object-cover" />
        <div className="absolute top-22 right-30">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-[32vw] gap-3 bg-white rounded-[10px] py-4 px-10">
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold text-orange-700 text-center">
                  Create Account
                </div>
                <div className="text-center text-gray-500">
                  Join us as a Customer, Restaurant, or Rider
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* User Type */}
                <div className="flex flex-col gap-3">
                  <label className="font-semibold">Register as:</label>
                  <div className="flex gap-5">
                    {["customer", "restaurant", "rider"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="userType"
                          value={type}
                          checked={formData.userType === type}
                          onChange={handleUserTypeChange}
                          className="cursor-pointer"
                        />
                        <span className="capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    placeholder="Enter your full name"
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                  {validateError.fullName && (
                    <span className="text-red-500 text-sm">
                      {validateError.fullName}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                  {validateError.email && (
                    <span className="text-red-500 text-sm">
                      {validateError.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className={inputClass}
                  />
                  {validateError.phone && (
                    <span className="text-red-500 text-sm">
                      {validateError.phone}
                    </span>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-[#6B7280]"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {validateError.gender && (
                    <span className="text-red-500 text-sm">
                      {validateError.gender}
                    </span>
                  )}
                </div>

                {/* DOB */}
                <div>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className={`${inputClass} text-[#6B7280]`}
                  />
                  {validateError.dob && (
                    <span className="text-red-500 text-sm">
                      {validateError.dob}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                  {validateError.password && (
                    <span className="text-red-500 text-sm">
                      {validateError.password}
                    </span>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={inputClass}
                  />
                  {validateError.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {validateError.confirmPassword}
                    </span>
                  )}
                </div>

                {/* Terms */}
                <div className="py-2">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                  />
                  <span className="text-gray-500">
                    {" "}
                    I agree to the{" "}
                    <Link className="text-(--primary) hover:underline">
                      terms and conditions
                    </Link>
                  </span>
                  {validateError.agreeTerms && (
                    <span className="text-red-500 text-sm block">
                      {validateError.agreeTerms}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-(--primary) rounded-[7px] p-3 text-white font-bold"
                >
                  {loading ? "Registering..." : "Register"}
                </button>

                <div className="text-center text-gray-500">
                  Already registered?
                  <Link
                    to="/login"
                    className="text-(--primary) font-semibold hover:underline"
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
