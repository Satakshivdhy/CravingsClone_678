import React from "react";
import contactPage from "../assets/contactPage.jpg";
const ContactUs = () => {
  // const [contact, setContact]
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

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="text"
                placeholder="What is this about?"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />

              <textarea
                rows="5"
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
