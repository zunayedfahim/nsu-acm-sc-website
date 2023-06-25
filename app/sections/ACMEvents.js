"use client";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from "../components/CustomButton";
import TopButton from "../components/TopButton";

const ACMEvents = () => {
  const eventImages = [
    // "https://nsusc.acm.org/assets/img/technovation/technovation4.jpg",
    // "https://nsusc.acm.org/assets/img/technovation/technovation3.jpg",
    // "https://nsusc.acm.org/assets/img/technovation/technovation6.jpg",
    // "https://nsusc.acm.org/assets/img/technovation/technovation7.jpg",
    // "https://nsusc.acm.org/assets/img/hacknsu/hackNSU3.jpg",
    // "https://nsusc.acm.org/assets/img/innovation/innovationChallenge3.jpg",
    // "https://nsusc.acm.org/assets/img/innovation/innovationChallenge4.jpg",
    // "https://nsusc.acm.org/assets/img/innovation/innovationChallenge1.jpg",
    // "https://nsusc.acm.org/assets/img/hacknsu/hackNSU1.jpg",
    // "https://nsusc.acm.org/assets/img/hacknsu/4.jpg",
    // "https://nsusc.acm.org/assets/img/hoc/hoc0.jpg",
    // "https://nsusc.acm.org/assets/img/hoc/hoc1.jpg",
    // "https://nsusc.acm.org/assets/img/hoc/hoc2.jpg",
    "HackNSU",
    "Technovation",
    "Hour of Code",
    "Programming Contest",
    "Innovation Challenge",
  ];

  const CustomArrow = (props) => {
    const { className, style, onClick, right } = props;
    return (
      <button
        className={`bg-transparent text-3xl  absolute top-[50%] ${
          right ? "-right-[30px]" : "-left-[30px]"
        }`}
        onClick={onClick}
      >
        {right ? <BsChevronRight /> : <BsChevronLeft />}
      </button>
    );
  };

  const CustomSlides = ({ index, item, key }) => {
    return (
      <div className="w-[16.5625rem] h-[21.3125rem] flex items-center justify-center bg-gray-400 bg-opacity-5 hover:bg-opacity-20 border border-gray-100/50 rounded-[1.875rem] shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-sm text-3xl text-white">
        <span className="-rotate-45 text-center">{item}</span>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    nextArrow: <CustomArrow right={true} />,
    prevArrow: <CustomArrow right={false} />,
  };
  return (
    <div id="events" className="mt-[4.75rem] relative">
      <h1 className="font-bold text-[3rem]">OUR EVENTS</h1>

      {/* Slider */}
      <div className="mt-[6.25rem] mb-[4.875rem]">
        <Slider {...settings}>
          {eventImages.map((item, index) => {
            return <CustomSlides key={index} item={item} />;
          })}
        </Slider>
      </div>

      {/* Button */}
      <div className="text-center">
        <CustomButton text="See Upcoming" type="secondary" />
      </div>

      <TopButton />
    </div>
  );
};

export default ACMEvents;
