import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false); //   new state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/messages`,
        formData,
        { timeout: 60000 }
      );
      setStatus('Message sent successfully!');
      setSubmitted(true); //   show thank you message

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        setStatus('');
        setSubmitted(false); //   optional: reset form after few seconds
      }, 5000);
    } catch (error) {
      setStatus(
        error.response?.data?.message ||
          `Failed to send message: ${error.message}. Please ensure the backend server is running.`
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-white mb-12"
        >
          Contact <span className="text-blue-500">Me</span>
        </motion.h2>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8 bg-gray-800 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Input Fields */}
            {['name', 'email', 'message'].map((field, idx) => (
              <div key={idx} className="relative">
                {field !== 'message' ? (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    id={field}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer block w-full px-4 pt-6 pb-2 text-white bg-gray-700 border border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer block w-full px-4 pt-6 pb-2 text-white bg-gray-700 border border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
                <label
                  htmlFor={field}
                  className="absolute text-sm text-gray-400 duration-200 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                  {field === 'message' ? 'Your Message' : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-full text-white font-semibold ${
                isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } transition duration-300`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-green-400 mt-8 text-lg font-medium"
          >
            <FaCheckCircle className="mx-auto mb-2 text-3xl" />
            Thank you for your response!
          </motion.div>
        )}

        {/* Status Message (Error or sending) */}
        {status && !submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 text-center flex items-center justify-center gap-2 text-sm ${
              status.includes('successfully') ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status.includes('successfully') ? <FaCheckCircle /> : <FaExclamationCircle />}
            <span>{status}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Contact;

