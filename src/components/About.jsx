import React from "react";
import Button from "./UI/Button";
import Hero from "../assets/image/heroimg.jpg";
import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import resume from "../assets/Rajesh.pdf";

function About() {
  return (
    <>
      <section id="about" className="py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            About
          </h1>
          <p className="font-normal text-gray-700 text-xl  mb-20 md:mb-10">
            Below is a summary of the Introduction.
          </p>
          <div className="flex flex-col-reverse lg:flex-row gap-6">
            <div className=" flex flex-col lg:w-1/2">
              <p className="mt-3 text-gray-600 text-xl">
                "I'm a passionate Frontend Developer skilled in React Js, and
                Tailwind CSS. I enjoy building fast, responsive, and
                user-friendly web applications with modern UI/UX principles. My
                focus is on writing clean, maintainable code and creating
                seamless digital experiences. Always eager to learn and improve,
                I'm excited to contribute to innovative projects and grow as a
                developer."
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mt-8">
                <a
                  href="https://instagram.com/in/yourprofile"
                  target="_blank"
                  rel=""
                  className="h-10 w-10 flex justify-center text-gray-600 hover:text-gray-800 duration-500 border-2 border-gray-600 hover:border-gray-800 rounded-full items-center"
                >
                  <i className="text-2xl ">
                    <FaInstagramSquare />
                  </i>
                </a>

                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel=""
                  className="h-10 w-10 flex justify-center text-gray-600 hover:text-gray-800 duration-500 border-2 border-gray-600 hover:border-gray-800 rounded-full items-center"
                >
                  <i className="text-2xl ">
                    <FaGithubSquare />
                  </i>
                </a>

                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel=""
                  className="h-10 w-10 flex justify-center text-gray-600 hover:text-gray-800 duration-500 border-2 border-gray-600 hover:border-gray-800 rounded-full items-center"
                >
                  <i className="text-2xl ">
                    <FaLinkedin />
                  </i>
                </a>
              </div>

              {/* Buttons */}
              <div className="flex justify-center pt-4 mt-8 space-x-16">
                <Button
                  label="Hire me"
                  textColor=" hover:text-white"
                  bgColor="hover:bg-gray-700"
                />
                <a href={resume} download={"Rajesh_frontend_Dev"}>
                  <Button label="Get my CV" />
                </a>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="flex justify-center items-center lg:w-1/2">
              <img
                src={Hero}
                alt="Profile"
                className="w-72 h-72 md:w-80 md:h-80 rounded-full shadow-2xl shadow-gray-500 border-2 border-black duration-500 hover:shadow-gray-800 md:hover:scale-110 ease-out"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
