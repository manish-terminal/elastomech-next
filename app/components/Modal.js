'use client';

import React, { useRef, useState } from "react";
import { Button, Fab } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from '@emailjs/browser';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: "#fff",
  boxShadow: 24,
  padding: "40px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const ModalDesign = ({ handleClose, open }) => {
  const form = useRef();  // Reference to the form element
  const [isLoading, setIsLoading] = useState(false);  // State for loading status
  const [messageStatus, setMessageStatus] = useState('');  // State for message status

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageStatus('');  // Reset the message status

    // Use EmailJS to send the form data
    emailjs
      .sendForm('service_1fcb9ht', 'template_8t3gl4s', form.current, {
        publicKey: 'n-W_fjN0Gt5M1bmgY',
      })
      .then(
        () => {
          setIsLoading(false);
          setMessageStatus('Message sent successfully!');
          form.current.reset();  // Reset the form after successful submission
        },
        (error) => {
          setIsLoading(false);
          setMessageStatus(`Failed to send: ${error.text}`);
        }
      );
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={style}>
        {/* Modal Header */}
        <div className="flex items-center justify-between w-full mb-5">
          <div className="text-3xl font-semibold text-gray-900">Find A Distributor</div>
          <Fab size="small" color="primary" aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </Fab>
        </div>

        {/* Modal Body */}
        <p className="text-base text-gray-600 mb-6 text-center">
          Feel free to reach out to us with any questions or inquiries. We'll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} id="contact-form" className="w-full">
          <div className="space-y-5">
            {/* Name Input */}
            <div>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Locality Selection */}
            <div>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                id="phone"
                name="phone"
                required
              >
                <option value="">Select Your Locality</option>
                <option value="india">India</option>
                <option value="europe">Europe</option>
                <option value="africa">Africa</option>
                <option value="nigeria">Nigeria</option>
                <option value="netherlands">Netherlands</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            {/* Message Input */}
            <div>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                id="message"
                name="message"
                placeholder="Your Message Here"
                required
              ></textarea>
            </div>
          </div>

          {/* Status Message */}
          {messageStatus && <p className="mt-4 text-center">{messageStatus}</p>}

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            className="w-full py-3 mt-6 !bg-yellow-400 !text-black text-lg font-semibold rounded-lg hover:bg-black focus:ring-2 focus:ring-yellow-500"
            type="submit"
            disabled={isLoading}  // Disable the button while loading
          >
            {isLoading ? "Sending..." : "Submit Now"}
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalDesign;