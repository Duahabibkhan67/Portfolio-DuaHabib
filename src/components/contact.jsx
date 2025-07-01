'use client';
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';


export default function ContactForm() {
  const [state, handleSubmit] = useForm("myzypkjg");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (state.succeeded) {
    return (
      <div className="flex justify-center ml-96 items-center min-h-screen">
        <p className="bg-purple-600 text-white sm:text-4xl font-semibold p-6 h-48 text-center rounded-lg shadow-lg">
          Thanks for contacted Me! <br /> 🙂
        </p>
      </div>
    );
  }

  return (
    <>
    <div className="border  border-accent flex justify-center ml-0 lg:ml-96 items-center mt-20 mb-6 px-4">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-lg">
        {/* Name Input */}
        <label htmlFor="name" className="block text-white font-semibold mb-1">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Email Input */}
        <label htmlFor="email" className="block text-white font-semibold mt-4 mb-1">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Message Input */}
        <label htmlFor="message" className="block text-white font-semibold mt-4 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full mt-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          {state.submitting ? "Submitting..." : "Send Message "}
        </button>
      </form>

    </div>
   
    </>
  );
}




