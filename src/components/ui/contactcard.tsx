"use client";

import { Mail, Phone, MapPin, User, Send, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const formFields = [
    { icon: User, name: "firstName", placeholder: "First Name" },
    { icon: User, name: "lastName", placeholder: "Last Name" },
    { icon: Mail, name: "email", placeholder: "Email" },
    { icon: Phone, name: "phone", placeholder: "Phone Number" },
    { icon: MapPin, name: "address", placeholder: "Address" },
  ];

  return (
    <div className="flex justify-center items-center p-6">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-black/40 border border-gray-300 dark:border-gray-700 shadow-xl space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Form Fields */}
        {formFields.map(({ icon: Icon, name, placeholder }) => (
          <motion.div
            key={name}
            whileHover={{
              scale: 1.02,
              borderColor: "#3b82f6",
              boxShadow: "0px 0px 12px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 shadow-sm bg-white dark:bg-black transition-all duration-300"
          >
            <Icon className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <input
              type={
                name === "email" ? "email" : name === "phone" ? "tel" : "text"
              }
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              placeholder={placeholder}
              required
              className="w-full bg-transparent text-gray-800 dark:text-gray-100 outline-none placeholder-gray-400 dark:placeholder-gray-600"
            />
          </motion.div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          {/* Reset Button */}
          <motion.button
            type="button"
            onClick={handleReset}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#2563eb",
              boxShadow: "0px 0px 12px rgba(37, 99, 235, 0.4)",
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-xl transition"
          >
            <RefreshCw className="w-5 h-5" />
            Reset
          </motion.button>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#2563eb",
              boxShadow: "0px 0px 12px rgba(37, 99, 235, 0.4)",
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-xl transition"
          >
            <Send className="w-5 h-5" />
            Submit
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactCard;
