import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Logo & Description */}
        <div>
          <img className='mb-5 w-40' src={assets.yellowlogo} alt="Company Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            <li 
  className="cursor-pointer text-blue-600 hover:underline" 
  onClick={() => window.location.href = "/admin"}
>
  Admin Panel
</li>


          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-8970145255</li>
            <li>harshpatil@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Footer Copyright */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2025 @ harshpatil.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
