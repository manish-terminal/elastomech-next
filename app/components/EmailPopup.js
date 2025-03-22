'use client';

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";

export default function EmailPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const form = useRef();

  useEffect(() => {
    // Check if the user has already subscribed
    const isSubscribed = localStorage.getItem("subscribed");
    if (!isSubscribed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        document.body.style.overflow = "hidden"; // Disable scrolling
      }, 10000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto"; // Restore scrolling on unmount
      };
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageStatus("");
  
    emailjs
      .sendForm("service_1fcb9ht", "template_mx2akvf", form.current, {
        publicKey: "n-W_fjN0Gt5M1bmgY",
      })
      .then(
        () => {
          setIsLoading(false);
          setMessageStatus("Thank you! You've been subscribed.");
          form.current.reset();
          localStorage.setItem("subscribed", "true"); // Save subscription status
          setTimeout(() => {
            setShowPopup(false);
            document.body.style.overflow = "auto"; // ✅ Restore scrolling after closing
          }, 1000);
        },
        (error) => {
          setIsLoading(false);
          setMessageStatus(`Failed to send: ${error.text}`);
        }
      );
  };
  
  
  

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-sm text-gray-600 mb-4">Stay updated with our latest news!</p>
          {messageStatus && <p className="text-yellow-500 mb-2">{messageStatus}</p>}
          
          <form ref={form} onSubmit={sendEmail} className="space-y-3">
            <input
              className="w-full p-2 border border-gray-300 rounded focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <Button
              variant="contained"
              className="!bg-yellow-500 !text-black !font-[600] !px-[23px] !py-[10px] h-auto !text-[15px] !shadow-none hover:!bg-black hover:!text-white !rounded-lg transition duration-300 ease-in-out w-full"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <button
            onClick={closePopup}
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          >
            ✖
          </button>
        </div>
      </div>
    )
  );
}
