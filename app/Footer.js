import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-[35.9375rem] flex flex-col items-center justify-center text-[1.25rem] mx-[10%]">
      {/* Top */}
      <div className="flex-1 flex items-center justify-between gap-[5rem]">
        {/* Left */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://nsusc.acm.org/assets/img/ACM_Logo_22.png"
            className="w-[7.625rem] h-[6.4375rem] mb-[2.19rem]"
          />
          <p className="w-[24.4375rem]">
            The First Student Chapter Of The Association For Computing
            Machineries In Bangladesh.
          </p>
        </div>
        {/* Middle */}
        <div>
          <p className="mb-[1.19rem] font-semibold">Useful Links</p>
          <ul className="w-[13.6875rem] h-[13.6875rem] list-['>'] [&>*]:mb-[1.19rem]">
            <li>
              <a href="#" className="hover:text-[#2F92D0]">
                ACM Education
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2F92D0]">
                ACM Digital Library
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2F92D0]">
                ACM Code of Ethics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2F92D0]">
                NSU Website
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2F92D0]">
                NSU ECE Department
              </a>
            </li>
          </ul>
        </div>
        {/* Right */}
        <div>
          <p>acm.sc@northsouth.edu</p>
          <p className="mt-[1.94rem] mb-[2.19rem] w-[20.875rem]">
            South Academic Building(10th Floor), North South University,
            Bashundhara R/A, Dhaka-1229, Bangladesh
          </p>
          {/* Social Media Icons */}
          <div className="flex [&>*]:h-[2.5625rem] [&>*]:w-[2.5625rem] gap-[1.5rem]">
            <BsFacebook />
            <BsLinkedin />
            <BsGithub />
            <BsYoutube />
            <BsMedium />
          </div>
        </div>
      </div>

      {/* Botton */}
      <div className="flex justify-between items-center w-full">
        <p>© Copyright NSU ACM SC. All Rights Reserved</p>
        <p>Developed by NSU ACM SC Web Team</p>
      </div>
    </div>
  );
};

export default Footer;
