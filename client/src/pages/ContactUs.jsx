import React, { useState } from "react";
import contactPage from "../assets/contactPage.jpg";
import api from "../config/api.config.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const ContactUs = () => {
  // const [contact, setContact]
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactData((prevData) => ({ ...prevData, [name]: value }));
    console.log(contactData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      fullName: contactData.fullName,
      email: contactData.email.toLowerCase(),
      phone: contactData.phone,
      subject: contactData.subject,
      message: contactData.message,
    };
    try {
      const res = await api.post("/public/contact-us", payload);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };
  return (
    <>
      <>
        <section className="relative min-h-screen bg-cover bg-center flex items-center justify-center">
          <div className=" bg-amber-400 ">
            <img
              src={contactPage}
              alt=""
              className="h-[90vh] w-full object-cover"
            />
          </div>
          <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-red-500">Contact Us</h2>

              <p className="text-gray-500 mt-2">
                Have a question? We'd love to hear from you.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={contactData.fullName}
                placeholder="Enter your full name"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="tel"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="text"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <textarea
                rows="5"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </>
    </>
  );
};

export default ContactUs;
