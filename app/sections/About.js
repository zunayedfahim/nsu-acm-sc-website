import Image from "next/image";
import CustomButton from "../components/CustomButton";
import TopButton from "../components/TopButton";

const About = () => {
  return (
    <div className="relative">
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
      <img
        src="https://nsusc.acm.org/assets/img/aboutpage.jpg"
        alt="nsu-acm-pic"
        className="w-[69.5rem] h-[37.375rem] bg-gray-400 rounded-xl"
      />

      {/* Button */}
      <div className="flex items-center justify-center mt-[3.0625rem]">
        <CustomButton text="Learn More" type="secondary" />
      </div>

      {/* UpArrow */}
      <TopButton />
    </div>
  );
};

export default About;
