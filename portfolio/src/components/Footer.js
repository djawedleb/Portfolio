"use client";
import { Col } from "react-bootstrap";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

export default function Component() {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <Footer container>
      <div className="w-full">
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Col md="4" className="footer-copywright">
           <h3>Copyright © {year} </h3>
         </Col>
         <Col md="4" className="footer-copywright">
           <h3>Designed and Developed by Lebaili Djouad</h3>
        </Col>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/djawed.lebaili.9/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/djawed_.leb/" icon={BsInstagram} />
            <Footer.Icon href="www.linkedin.com/in/djawed-leb" icon={BsLinkedin} />
            <Footer.Icon href="https://github.com/djawedleb" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
