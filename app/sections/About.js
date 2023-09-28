"use client";
import Image from "next/image";
import CustomButton from "../components/CustomButton";
import TopButton from "../components/TopButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AboutACM from "../assets/img/about_acm/aboutacm.jpg";
import AboutACM2 from "../assets/img/about_acm/aboutacm2.jpg";
import AboutACM3 from "../assets/img/about_acm/aboutacm3.jpg";
import AboutACM4 from "../assets/img/about_acm/aboutacm4.jpg";

const About = () => {
  const aboutImages = [AboutACM, AboutACM2, AboutACM3, AboutACM4];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 1,
    arrows: false,
    centerPadding: "60px",
    cssEase: "linear",
    accessibility: false,
  };

  const CustomSlides = ({ item, key }) => {
    return (
      <Image
        src={item}
        width={"100%"}
        height={"19.3125rem"}
        alt={`About Image ${key}`}
        className="w-full h-[90vh] object-cover object-center rounded-xl"
      />
    );
  };

  return (
    <section id="about" className="relative">
      {/* Heading */}
      <h1 className="font-bold text-[3rem]">WHO WE ARE</h1>
      {/* Description */}
      <p className="my-[3.125rem] text-[1.5rem]">
        We are the first student chapter of the Association for Computing
        Machineries in Bangladesh. NSU ACM Student Chapter is one of 680
        chapters worldwide and contributes to the broad scope of ACM by
        advancing computing as a science and profession.
      </p>
      {/* Picture */}
      <div className="w-full">
        <Slider {...settings}>
          {aboutImages.map((item, index) => {
            return <CustomSlides key={index} item={item} />;
          })}
        </Slider>
      </div>
      {/* Button */}
      <div className="flex items-center justify-center mt-[3.0625rem]">
        <CustomButton text="Learn More" type="secondary" />
      </div>
      {/* UpArrow */}
      <TopButton />
    </section>
  );
};

export default About;
