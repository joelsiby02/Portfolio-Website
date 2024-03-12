import React, { useState } from 'react';

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
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex justify-center gap-4">
          <a href="https://github.com/joelsiby02" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" alt="GitHub" width="32" height="32" style={{ filter: 'invert(100%)' }} />
          </a>
          <a href="https://www.linkedin.com/in/joel-siby-752916277/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="aa73b4o43458kx7wal8wkgu2sqiqc0w4" className="octicon"><title id="aa73b4o43458kx7wal8wkgu2sqiqc0w4">LinkedIn</title><g clip-path="url(#clip0_202_91845)"><path d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z" fill="currentColor"></path></g></svg>
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
