import React,  { useRef } from "react";
import { PiBuildingOffice } from "react-icons/pi";
import { MdLocalPhone } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import emailjs from "emailjs-com";
import StyledMap from "./StyledMap";

const Contact = () => {
  const form = useRef();

  const position = { 
    lat: 19.140890779136594, 
    lng: 72.84299784481418, 
  };

  const size = {
    width: '100%',
    height: '375px',
}

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_0d29e67', 'template_3t8y9b3', form.current, 'YN4ZM5IV00gbtojAK')
      .then(
        () => {
          alert('Message sent successfully!'); // Success message
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          alert('Failed to send the message, please try again.'); // Error message
        },
      );
  };  
  return (
    <div className="m-auto max-w-7xl font-jost tracking-wide mb-20 px-4 sm:px-10 lg:px-8 text-gray-300">
      <div className="my-10">
        <h1 className="text-center text-5xl md:text-8xl font-bold text-gray-200 hover:text-white border-b pb-5 border-gray-700">Contact Us</h1>
        <p className="text-center text-2xl sm:text-xl mt-2">We'd <FaRegHeart className="inline"/> to help!</p>
      </div>

      <div className="m-auto md:flex block gap-8">



        {/*---------------------------------------- Left Panel ------------------------------------------------*/}




      <div className="md:w-1/2 w-full px-2 md:pr-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-white">Get In Touch</h1>
        <div className="text-lg text-gray-400 mt-4 tracking-normal">
          <p>
          At Mantik Enterprises, we provide premium glass solutions, including V-Groove Engraving, CEP, Beveling, Decorative Laminated Glass, Mirrors, Smart Glass, Toughened Glass, and Bend Glass, designed to enhance any space with style and durability.
          </p>
        </div>
        <div className="text-xl mt-6">
          <ul className="space-y-4 text-gray-400">
            {/* Office Address */}
            <li className="flex items-start gap-5">
              <span className="text-xl"><PiBuildingOffice /></span>
              <p className="">
                Unit NO: 1, Ghaswala Estate, Swami Vivekananda Rd, opp. 24 Karat, Jogeshwari West, Mumbai-400102
              </p>
            </li>
            {/* Email */}
            <li className="flex items-start gap-5">
             <span className="text-xl"><MdLocalPhone /></span>
             <a href="mailto:the.raj2301@gmail.com" className="hover:text-white">the.raj2301@gmail.com</a>
            </li>
            {/* Phone */}
            <li className="flex items-start gap-5">
            <span className="text-xl"><IoMailSharp /></span>
            <a href="tel:+917738339185" className="hover:text-white">+91 7738339185</a>
            </li>
          </ul>
        {/* --------------------------------Embadded Google Map--------------------------------------------- */}

        <div className="py-5 w-full">
          {/* <StyledMap/> */}
          <StyledMap  position={position} size={size}/>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.9656598897!2d72.843005!3d19.140907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ef1a14676b%3A0xf4396abfcb851114!2sMANTIK%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1733734079693!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        </div>


      </div>




        {/*----------------------------------- Right Panel --------------------------------------------------*/}



        
        <form
          ref={form} 
          onSubmit={sendEmail}
          className="md:w-1/2 w-full px-2 mt-10 md:mt-0">
          <div className="flex flex-col sm:flex-row lg:flex-row md:flex-col gap-5">


               {/* ----------------------------------- First Name -------------------------------- */}


              <div className="flex flex-col sm:w-1/2 md:w-full lg:w-1/2 w-full">
                  <label htmlFor="firstname" className="block text-lg mb-2 text-gray-100">
                  First Name
                  </label>
                  <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  autoComplete="given-name"
                  className="w-full bg-[#252526] block rounded-md py-2 px-4 text-gray-100 ring-1 ring-gray-700 focus:ring-2 focus:ring-indigo-600 outline-none sm:text-sm"
                  />
              </div>


               {/* ----------------------------------- Last Name -------------------------------- */}



              <div className="flex flex-col sm:w-1/2 md:w-full lg:w-1/2 w-full">
                  <label htmlFor="lastname" className="block text-lg mb-2 text-gray-100">
                  Last Name
                  </label>
                  <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  autoComplete="family-name"
                  className="w-full bg-[#252526] block rounded-md py-2 px-4 text-gray-100 ring-1 ring-gray-700 focus:ring-2 focus:ring-indigo-600 outline-none sm:text-sm"
                  />
              </div>
          </div>

                {/* ----------------------------------- Email ID -------------------------------- */}

          <div className="my-5 lg:my-10">
            <label htmlFor="email" className="block text-lg mb-2 text-gray-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="w-full bg-[#252526] block rounded-md py-2 px-4 text-gray-100 ring-1 ring-gray-700 focus:ring-2 focus:ring-indigo-600 outline-none sm:text-sm"
            />
          </div>
          

                {/* ----------------------------------- Mob Number -------------------------------- */}


          <div className="my-5 lg:my-10">
            <label htmlFor="tel" className="block text-lg mb-2 text-gray-100">
              Phone Number
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              autoComplete="tel"
              className="w-full bg-[#252526] block rounded-md py-2 px-4 text-gray-100 ring-1 ring-gray-700 focus:ring-2 focus:ring-indigo-600 outline-none sm:text-sm"
            />
          </div>


                {/* ----------------------------------- TextArea Massage -------------------------------- */}


          <div className="my-5 lg:my-10">
            <label htmlFor="message" className="block text-lg mb-2 text-gray-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={12}
              className="w-full bg-[#252526] block rounded-md py-2 px-4 text-gray-100 ring-1 ring-gray-700 focus:ring-2 focus:ring-indigo-600 outline-none sm:text-sm"
            ></textarea>
          </div>

          <div className="text-center md:text-left">
            <button
              type="submit"
              className="rounded-md px-8 py-2 mt-4 bg-[#111111] ring-1 ring-gray-700 text-lg text-gray-300 hover:text-white hover:ring-1 hover:ring-sky-600 transition-all ease-in-out delay-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
