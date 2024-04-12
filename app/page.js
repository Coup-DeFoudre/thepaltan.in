import React from "react";
import "./globals.css";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className=" mx-10 lg:mx-64 sm:px-10 inset-0 max-h-screen">
      <div className="mainbody">
        <div className="nav my-10 py-5 text-4xl font-bold">
          <img
            src="/Paltan.png"
            alt="The Paltan"
            srcSet=""
            className="h-7 lg:h-full"
          />
        </div>
        <div className="flex justify-between flex-col-reverse lg:flex-row gap-20">
          <div className="lg:mt-20 left-part lg:w-[40%] mb-20 lg:mb-5 relative">
            <h1 className="join text-5xl sm:text-7xl font-bold">
              Join Our Community
            </h1>
            <div className="btn mt-12 flex flex-col gap-5">
              <Link href="https://forms.gle/wqR5f2kT8oARkHFP7" target="_blank">
                {" "}
                <div className="bg-[#43B27F] flex items-center justify-between rounded-lg text-xl sm:text-2xl md:text-3xl w-[75%]  p-1  shadow-black drop-shadow-2xl">
                  <h3 className="px-5 md:px-10 font-semibold py-2">
                    Join as Intern
                  </h3>

                  <div className="bg-[#D9D9D9] text-[#050505] rounded-lg p-2 mr-1">
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
              <Link href="/home">
                {" "}
                <div className="bg-[#43B27F] flex items-center justify-between rounded-lg text-xl sm:text-2xl md:text-3xl w-[75%]  p-1  shadow-black drop-shadow-2xl">
                  <h3 className="px-5 md:px-10 font-semibold py-2">
                    Join as Member
                  </h3>

                  <div className="bg-[#D9D9D9] text-[#050505] rounded-lg p-2 mr-1">
                    <FaArrowRight />
                  </div>
                </div>{" "}
              </Link>
              <Link href="https://forms.gle/wqR5f2kT8oARkHFP7" target="_blank">
                {" "}
                <div className="bg-[#43B27F] flex items-center justify-between rounded-lg text-xl sm:text-2xl md:text-3xl  w-[75%]  shadow-black drop-shadow-2xl  p-1">
                  <h3 className="px-5 md:px-10 font-semibold py-2">
                    Join as Volunteer
                  </h3>

                  <div className="bg-[#D9D9D9] text-[#050505] rounded-lg p-2 mr-1">
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </div>

            <div className="socials-desktop hidden lg:flex mt-5 justify-center  items-center  gap-3 w-[75%]">
              <h4>Follow us at :</h4>
              <div className="flex justify-between items-center gap-3">
                <Link
                  href="https://www.facebook.com/share/ABUsMtg4erWFAP2y/?mibextid=qi2Omg"
                  target="_blank"
                >
                  {" "}
                  <FaFacebook />{" "}
                </Link>
                <Link
                  href="https://www.instagram.com/thepaltan.in/"
                  target="_blank"
                >
                  {" "}
                  <FaInstagram />
                </Link>
                <FaTwitter />
              </div>
            </div>
          </div>

          <div className="right-part h-fit max-w-[450px] bg-[#43B27F] rounded-2xl p-10 relative ">
            <h1 className="text-3xl sm:text-4xl font-bold shadow-black drop-shadow-xl ">
              What is Paltan ?
            </h1>
            <img
              src="/Star.png"
              alt=""
              srcSet=""
              className="absolute h-52 top-[40%] right-0"
            />
            <p className="text-[#050505] py-5 font-light text-justify text-base sm:text-xl tracking-tight">
              <span className="font-normal ">The Paltan</span> is a modern
              digital media channel focused on delivering news and content with
              an <span className="font-bold">India-first perspective.</span> It
              aims to be an open platform for digital and mobile journalism,
              providing its audience with timely and relevant information
              tailored to their interests and needs.
            </p>
            <div className="card p-5 bg-[#FFFFFF] rounded-2xl text-[#050505] ">
              <div className="top flex justify-between items-center">
                <div className="left flex gap-4 items-center">
                  <img
                    src="/chetan.jpg"
                    alt=""
                    srcSet=""
                    className="h-10 sm:h-16 rounded-full"
                  />
                  <div className="name">
                    <h3 className="font-bold text-lg sm:text-2xl">
                      Chetan Joshi
                    </h3>
                    <h5 className="text-xs font-thin pl-1">
                      Independent Journalist
                    </h5>
                  </div>
                </div>
                <div className="right ">
                  <img
                    src="/Star2.png"
                    alt=""
                    srcSet=""
                    className="hidden md:block w-16"
                  />
                </div>
              </div>
              <div className="bottom mt-5">
                <q className="text-sm font-semibold tracking-tighter md:text-base ">
                  Be the change you want to see in others
                </q>
                <p className="text-justify text-sm leading-relaxed mt-3 p-2">
                  {" "}
                  Join us and gain exclusive access to behind-the-scenes
                  insights, contribute to shaping our narrative, and be part of
                  a community dedicated to upholding the highest standards of
                  reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
