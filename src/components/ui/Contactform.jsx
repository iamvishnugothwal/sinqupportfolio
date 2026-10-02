"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const servicesList = [
  {
    id: "branding",
    label: "Branding",
    description: "I need a strong brand identity.",
  },
  {
    id: "web_design",
    label: "Web Design",
    description: "I need a website design.",
  },
  {
    id: "web_development",
    label: "Web Development",
    description: "I need a website built.",
  },
  { id: "seo", label: "SEO", description: "I want better search visibility." },
];

export default function Contactform() {
  const steps = ["name", "company", "email", "phone", "services", "message"];
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const progress = Math.round((step / (steps.length - 1)) * 100);

  const validateInput = () => {
    const field = steps[step];
    const value = formData[field];
    let errorMsg = "";

    switch (field) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMsg = "Please enter a valid email address.";
        }
        break;
      case "phone":
        if (!/^[0-9]{10}$/.test(value)) {
          errorMsg = "Please enter a valid 10-digit phone number.";
        }
        break;
      case "name":
      case "company":
      case "message":
        if (value.trim().length < 2) {
          errorMsg = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required.`;
        }
        break;
      case "services":
        if (value.length === 0) {
          errorMsg = "Please select at least one service.";
        }
        break;
      default:
        break;
    }

    if (errorMsg) {
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
      return false;
    }

    setErrors((prev) => ({ ...prev, [field]: "" }));
    return true;
  };

  const handleNext = () => {
    if (validateInput()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleService = (id) => {
    const updated = formData.services.includes(id)
      ? formData.services.filter((s) => s !== id)
      : [...formData.services, id];
    setFormData({ ...formData, services: updated });
    setErrors((prev) => ({ ...prev, services: "" }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step < steps.length - 1) {
        handleNext();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xpwjklaz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          services: formData.services.join(", "),
          message: formData.message,
        }),
      });

      if (res.ok) {
        toast.success("Thank you! Your message has been sent.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          services: [],
          message: "",
        });
        setStep(0);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl p-6 bg-transparent">
      <ToastContainer position="bottom-right" autoClose={3000} />

      {/* Circular Progress */}
      <div className="flex justify-center md:justify-start mb-10">
        <div className="relative w-20 h-20">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="gray"
              strokeWidth="6"
              fill="none"
              className="opacity-30"
            />
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="#fff"
              strokeWidth="6"
              fill="none"
              strokeDasharray={2 * Math.PI * 35}
              strokeDashoffset={
                2 * Math.PI * 35 - (progress / 100) * 2 * Math.PI * 35
              }
              className="transition-all duration-300"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-semibold text-white">
            {progress}%
          </span>
        </div>
      </div>

      <form className="relative" onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Step Inputs */}
            {steps[step] === "name" && (
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium font-primary">
                  What’s your name? *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none"
                  required
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name}</p>
                )}
              </div>
            )}

            {steps[step] === "company" && (
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-medium font-primary">
                  Your Business / Brand name? *
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter business name"
                  value={formData.company}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none"
                  required
                />
                {errors.company && (
                  <p className="text-red-400 text-sm">{errors.company}</p>
                )}
              </div>
            )}

            {steps[step] === "email" && (
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium font-primary">
                  What’s your email address? *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>
            )}

            {steps[step] === "phone" && (
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-medium font-primary">
                  What’s your phone number? *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none"
                  required
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm">{errors.phone}</p>
                )}
              </div>
            )}

            {steps[step] === "services" && (
              <div className="flex flex-col gap-2">
                <label className="font-medium font-primary">
                  What services are you interested in? *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {servicesList.map((service) => {
                    const isSelected = formData.services.includes(service.id);
                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`cursor-pointer border rounded-xl p-4 transition ${
                          isSelected
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-white/30"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{service.label}</h3>
                            <p className="text-sm opacity-75">
                              {service.description}
                            </p>
                          </div>
                          {isSelected && (
                            <span className="text-blue-500">
                              <Check size={20} />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {errors.services && (
                  <p className="text-red-400 text-sm">{errors.services}</p>
                )}
              </div>
            )}

            {steps[step] === "message" && (
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-medium font-primary">
                  Tell us about your project *
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none"
                  rows="3"
                  required
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message}</p>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 text-xl md:text-lg font-semibold border-2 text-white rounded-lg hover:bg-white hover:text-black"
                >
                  ←
                </button>
              )}

              {step < steps.length - 1 ? (
                <div className="ml-auto flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-4 py-2 border-2 text-lg font-medium rounded-lg bg-white text-black"
                  >
                    OK
                  </button>
                  <span className="text-sm font-thin font-mono xl:block hidden">
                    Press ↵
                  </span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
}
