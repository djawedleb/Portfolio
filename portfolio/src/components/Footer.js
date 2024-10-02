"use client";
import { Col } from "react-bootstrap";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import 'tailwindcss/tailwind.css';

export default function Component() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <FlowbiteFooter container className="bg-[#E0F7FA] ">
      <div className="w-full">
      <FlowbiteFooter.Divider className="bg-gray-800 h-1 " />
        <div className="w-full sm:flex sm:items-center sm:justify-between py-2">
          <Col md="4" className="footer-copywright text-gray-800">
            <h3 className="text-center sm:text-left">Copyright © {year}</h3>
          </Col>
          <Col md="4" className="footer-copywright text-gray-800">
            <h3 className="text-center sm:text-left">Designed and Developed by Lebaili Djouad</h3>
          </Col>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon 
              href="https://www.facebook.com/djawed.lebaili.9/" 
              icon={BsFacebook} 
              className="text-gray-800 hover:text-[#0288D1] transition duration-200"
            />
            <FlowbiteFooter.Icon 
              href="https://www.instagram.com/djawed_.leb/" 
              icon={BsInstagram} 
              className="text-gray-800 hover:text-[#0288D1] transition duration-200"
            />
            <FlowbiteFooter.Icon 
              href="https://www.linkedin.com/in/djawed-leb" 
              icon={BsLinkedin} 
              className="text-gray-800 hover:text-[#0288D1] transition duration-200"
            />
            <FlowbiteFooter.Icon 
              href="https://github.com/djawedleb" 
              icon={BsGithub} 
              className="text-gray-800 hover:text-[#0288D1] transition duration-200"
            />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}
