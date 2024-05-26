import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-center md:text-start relative md:h-[30vh] lg:h-[80vh] flex flex-col justify-between p-[1rem] md:py-[1.5rem] xl:py-[2rem] md:px-[2rem] xl:px-[8rem]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/footer-bg.jpg')", opacity: 0.3 }}
      />
      <div className="bg-transparent relative md:text-[1.8rem] xl:text-[2.5rem] xl:leading-[3.5rem] xl:pt-[5rem] md:pt-[2.5rem] py-[1rem]">
        <h1>Your journey starts here!</h1>
        <h1 className="text-[#B3B3B3]">Let&apos;s talk!</h1>
      </div>
      <div className="bg-transparent relative flex items-center flex-col md:flex-row justify-center md:justify-between pb-[1rem] md:pb-[1.7rem] border-b-[1px] xl:pt-[2rem] lg:pb-[5rem]">
        <ul className="flex items-center text-xs md:text-sm xl:text-[1rem] mb-3 md:mb-0">
          <li className="border-b-2 cursor-pointer">Home</li>
          <li className="mx-2 md:mx-5 hover:border-b-2 cursor-pointer">Blog</li>
          <li className="hover:border-b-2 cursor-pointer">Shop</li>
          <li className="mx-2 md:mx-5 hover:border-b-2 cursor-pointer">
            Contact Us
          </li>
        </ul>
        <div className="flex items-center">
          <FaFacebookF className="border-[1px] rounded-full p-2 text-[2rem] xl:p-[0.5rem] xl:text-[2.5rem]" />
          <FaXTwitter className="border-[1px] rounded-full p-2 text-[2rem] xl:p-[0.5rem] xl:text-[2.5rem] mx-2 xl:mx-3" />
          <FaGithub className="border-[1px] rounded-full p-2 text-[2rem] xl:p-[0.5rem] xl:text-[2.5rem]" />
          <FaInstagram className="border-[1px] rounded-full p-2 text-[2rem] xl:p-[0.5rem] xl:text-[2.5rem] mx-2 xl:mx-3" />
        </div>
      </div>
      <div className="bg-transparent relative opacity-[0.6] text-xs md:text-sm xl:text-[1rem] pt-4 md:p-0">
        <p>ThemeRex &copy; 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
