import React, { useRef, useState } from "react"; 
import Button from "@mui/material/Button"; 
import emailjs from '@emailjs/browser'; 

const ContactForm = () => { 
  const form = useRef(); // Reference to the form element 
  const [isLoading, setIsLoading] = useState(false); // State for loading status 
  const [messageStatus, setMessageStatus] = useState(''); // State for message status 

  const sendEmail = (e) => { 
    e.preventDefault(); // Prevent the default form submission 
    setIsLoading(true); // Set loading state 
    setMessageStatus(''); // Reset the message status

    // Use EmailJS to send the form data 
    emailjs
      .sendForm('service_1fcb9ht', 'template_8t3gl4s', form.current, { 
        publicKey: 'n-W_fjN0Gt5M1bmgY', 
      }) 
      .then(
        () => {
          setIsLoading(false); 
          setMessageStatus('Message sent successfully!');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          setIsLoading(false);
          setMessageStatus(`Failed to send: ${error.text}`);
        }
      );
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap bg-white
     text-white py-12 px-6 md:py-20 md:px-12 lg:py-[120px] lg:px-[10em]">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-6 bg-white text-black ">
        <div className="contact-section">
          <div className="sec-title mb-6">
            <span className="text-yellow-500 uppercase font-semibold text-lg">
              Let's Talk
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Get in Touch with Us
            </h2>
          </div>
          <div id="form-messages" className="mb-6">
            {messageStatus && <p className="text-yellow-500">{messageStatus}</p>}
          </div>
          <form ref={form} onSubmit={sendEmail} id="contact-form">
            <div className="flex flex-wrap -mx-2 md:-mx-3">
              {/* Name Input */}
              <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                <input
                  className="form-control w-full p-3 border border-gray-300 rounded focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
                  type="text"
                  id="from_name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              {/* Email Input */}
              <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                <input
                  className="form-control w-full p-3 border border-gray-300 rounded focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
                  type="email"
                  id="from_email"
                  name="email"
                  placeholder="Your E-Mail"
                  required
                />
              </div>
              {/* Phone Number Input */}
              <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                <input
                  className="form-control w-full p-3 border border-gray-300 rounded focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
                  type="text"
                  id="from_phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              {/* Product Selection Input */}
              <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                <select
                  className="form-control w-full p-3 border border-gray-300 rounded focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
                  id="product"
                  name="product"
                  required
                >
                  <option value="">Select Product Interested</option>
                  <option value="dock-bumper">Custom Product</option>
                  <option value="dock-bumper">Dock Bumper</option>
                  <option value="dock-fender">Dock Fender</option>
                  <option value="wheel-chocker">Wheel Chocker</option>
                  <option value="rubber-buffer">Rubber Buffer</option>
                  <option value="cable-protector">Cable Protector</option>
                  <option value="hose-ramps">Hose Ramps</option>
                </select>
              </div>
              {/* Message Textarea */}
              <div className="w-full px-2 md:px-3 mb-6">
                <textarea
                  className="form-control w-full p-3 border border-gray-300 rounded focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
                  id="message"
                  name="message"
                  placeholder="Your Message Here"
                  required
                ></textarea>
              </div>
            </div>
            {/* Submit Button */}
            <Button
              variant="contained"
              className="!bg-yellow-500 !text-black !font-[600] !px-[23px] !py-[17px] h-auto !text-[15px] !shadow-none hover:!bg-black hover:!text-white !rounded-lg transition duration-300 ease-in-out"
              type="submit"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? "Sending..." : "Submit Now"}
            </Button>
          </form>
        </div>
      </div>
      {/* Map Section */}
      <div className="w-full lg:w-1/2 p-6">
        <iframe title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4126.37591102106!2d73.19148297550592!3d19.186439048495625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7934357de103d%3A0x43684d9344850c72!2sELASTOMECH!5e1!3m2!1sen!2sin!4v1731173611029!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[6px] md:h-[500px] lg:h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
