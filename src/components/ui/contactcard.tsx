"use client";

import {
  Mail,
  Phone,
  MapPin,
  User,
  Send,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ShineBorder } from "../magicui/shine-border";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState({
    num1: 0,
    num2: 0,
    answer: 0,
    question: "",
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-", "×"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let answer: number = 0;

    switch (operator) {
      case "+":
        answer = num1 + num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "×":
        answer = num1 * num2;
        break;
    }

    setCaptcha({
      num1,
      num2,
      answer,
      question: `${num1} ${operator} ${num2} = ?`,
    });
    setFormData((prev) => ({ ...prev, captchaInput: "" }));
    setIsCaptchaValid(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "captchaInput") {
      setIsCaptchaValid(parseInt(e.target.value) === captcha.answer);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      captchaInput: "",
    });
    generateCaptcha();
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      captchaInput: "",
    });
    generateCaptcha();
  };

  return (
    <div className="w-full max-w-5xl mb-8">
      <div className="flex justify-center items-center p-6 relative">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-6 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-black/40 shadow-xl space-y-6 relative z-10"
        >
          <ShineBorder
            borderWidth={1}
            duration={10}
            shineColor={["#f23777", "#6f3cf5", "#f09c47"]}
            className="absolute inset-0 rounded-2xl"
          />

          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <User className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <Phone className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center justify-between border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-black">
            <ShieldCheck className="w-6 h-6 text-gray-700 dark:text-gray-400 mr-3" />
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              {captcha.question}
            </span>
            <input
              type="number"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              required
              className="w-20 text-center bg-transparent outline-none"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
            >
              <RefreshCw className="w-5 h-5" /> Reset
            </button>
            <button
              type="submit"
              disabled={!isCaptchaValid}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition ${
                isCaptchaValid
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              <Send className="w-5 h-5" /> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;
