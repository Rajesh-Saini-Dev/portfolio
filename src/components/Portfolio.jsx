import React from "react";
import PaginationImg from "../assets/image/Pagination.png";
import StopWatchImg from "../assets/image/StopWatch.png";
import FAQImg from "../assets/image/FAQ.webp";
import TabbingImg from "../assets/image/Tabbing.png";
import PopUpImg from "../assets/image/PopUp.png";
import CrudImgage from "../assets/image/Crud.png";

const portfolio = [
  {
    name: "Pagination",
    image: PaginationImg,
    links: "https://reactpagination1.netlify.app/",
  },
  {
    name: "StopWatch",
    image: StopWatchImg,
    links: "https://digi-stopwatch.netlify.app/",
  },
  {
    name: "Faq/Accordion",
    image: FAQImg,
    links: "https://faqsystem.netlify.app/",
  },
  {
    name: "Tabbing-System",
    image: TabbingImg,
    links: "https://mytabbingsystem.netlify.app/",
  },
  {
    name: "PopUp Model",
    image: PopUpImg,
    links: "https://loginpopupmodel.netlify.app/",
  },
  {
    name: "Crud Opratin",
    image: CrudImgage,
    links: "https://mycrudopration.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Portfolio
        </h1>
        <p className="font-normal text-gray-700 text-xl mb-20">
          Below is a summary of the projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((port, idx) => (
            <div
              key={idx}
              className="bg-gray-400 p-4 rounded-md shadow-lg hover:shadow-gray-500 transition ease-out duration-500 flex flex-col items-center"
            >
              <a
                href={port.links}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <div
                  className="rounded-md bg-cover bg-center h-56 w-full"
                  style={{ backgroundImage: `url(${port.image})` }}
                ></div>
                <h4 className="font-medium text-gray-800 text-lg text-center hover:text-gray-950 pt-2">
                  {port.name}
                </h4>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
