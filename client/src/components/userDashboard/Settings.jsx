import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../config/api.config.js";
import toast from "react-hot-toast";

const Settings = () => {
  const { user, setUser } = useAuth();
  const [isEditable, setIsEditable] = useState(false);
  const [tempUser, setTempUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    photo: "",
  });

  useEffect(() => {
    if (user) {
      setTempUser({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        photo: user.photo || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const payload = {
      email: tempUser.email.toLowerCase(),
      fullName: tempUser.fullName,
      phone: tempUser.phone,
    };

    try {
      const res = await api.put("/user/edit-profile", payload);
      setUser(res.data.data);
      toast.success(res.data.message);
      setIsEditable(false);
    } catch (error) {
      toast.error(
        `${error.response?.status || "Error"} | ${
          error.response?.data?.message || error.message
        }`,
      );
    }
  };

  if (!user) {
    return (
      <div className="rounded-[2rem] bg-white p-8 shadow-sm">
        <p className="text-slate-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-sm">
      <div className="mb-8 flex flex-col gap-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center">
        <div className="flex-shrink-0 rounded-full border border-slate-200 bg-slate-100 p-1">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-slate-200">
            {tempUser.photo ? (
              <img
                src={tempUser.photo}
                alt={tempUser.fullName}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-4xl text-orange-600">
                👤
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3 text-slate-700">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">
            Profile settings
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">{tempUser.fullName || "Your Name"}</h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            Update your account details and contact information. Your email cannot be changed here.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Full name
          <input
            type="text"
            name="fullName"
            value={tempUser.fullName}
            onChange={handleChange}
            disabled={!isEditable}
            className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-orange-400 focus:outline-none"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Email address
          <input
            type="email"
            name="email"
            value={tempUser.email}
            disabled
            className="w-full rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500 shadow-sm"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Phone number
          <input
            type="tel"
            name="phone"
            value={tempUser.phone}
            onChange={handleChange}
            disabled={!isEditable}
            className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-orange-400 focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {isEditable ? (
          <>
            <button
              type="button"
              onClick={() => setIsEditable(false)}
              className="rounded-3xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-3xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Save changes
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditable(true)}
            className="rounded-3xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            Edit profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Settings;
