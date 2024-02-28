import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgegkdvk");

  if (state.succeeded) {
    return (
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg text-center">
        <p className="text-gray-800">Thanks for reaching out!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-4">Contact ME</h2>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:border-blue-500"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:border-blue-500"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
