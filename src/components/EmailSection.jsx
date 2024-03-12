import React, { useState } from 'react';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "https://formspree.io/f/mgegkdvk"; // Formspree endpoint

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.ok) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    } else {
      console.error("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-gray-900 rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h2 className="text-center my-7 font-bold text-3xl sm:text-4xl font-serif">
          Lets <span className="text-indigo-600">Connect</span>
        </h2>
        <p className="text-[#ADB7BE] mb-4 max-w-md font-semi bold text-center font-serif mx-auto">
          Im currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, Ill try my best to get back to you!
        </p>
        <div className="socials flex justify-center gap-4">
          <a href="https://github.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="bg-[#18191E] text-center text-white text-sm rounded-lg block w-full p-2.5">Email sent successfully!</p>
        ) : (
            <form className="flex flex-col" onSubmit={handleSubmit} action="https://formspree.io/f/mgegkdvk" method="POST">
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] text-white text-sm rounded-lg block w-full p-2.5"
                placeholder="selena@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] text-white text-sm rounded-lg block w-full p-2.5"
                placeholder="Wave me a Hey🙋🏽‍♂️"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] text-white text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-green-400 to-purple-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
