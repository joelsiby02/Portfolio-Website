import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const QuoteGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedQuote, setGeneratedQuote] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedState = localStorage.getItem('quotifyState');
    if (storedState === 'open') {
      setIsOpen(true);
    }

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        localStorage.setItem('quotifyState', 'closed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const gemini = new GoogleGenerativeAI('AI'); 

  const aiRun = async () => {
    setLoading(true);
    try {
      const result = await gemini.generateContent(`random quote about ${prompt}`);
      const response = await result.response;
      const text = await response.text();
      setGeneratedQuote(text);
      setLoading(false);
    } catch (error) {
      setError('Failed to generate quote. Please try again.');
      setLoading(false);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      localStorage.setItem('quotifyState', 'open');
    } else {
      localStorage.setItem('quotifyState', 'closed');
    }
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    aiRun();
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('quotifyState', 'closed');
  };

  return (
    <div>
      <button
        className="fixed bottom-4 right-4 bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition-colors duration-300"
        onClick={toggleChatbot}
      >
        Quotify
      </button>
      {isOpen && (
        <div className="fixed bottom-4 right-4">
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <h2 className="text-center my-7 font-bold text-3xl sm:text-4xl font-serif">
              <span className="text-indigo-600">Quotify</span>
            </h2>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={prompt}
                onChange={handlePromptChange}
                placeholder="Ask me anything..."
                className="bg-[#18191E] text-white text-sm rounded-lg block w-full p-2.5 mb-4"
              />
              <button 
                type="submit"
                className="px-6 py-3 w-full mx-auto sm:w-auto center rounded-full bg-gradient-to-r from-blue-400 to-purple-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                Generate Quote
              </button>
            </form>
            {loading && <p>Loading...</p>}
            {generatedQuote && (
              <div className="mt-4">
                <h2 className="text-lg text-sherif font-semibold">Generated Quote:</h2>
                <p className="text-gray-700">{generatedQuote}</p>
              </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteGenerator;
