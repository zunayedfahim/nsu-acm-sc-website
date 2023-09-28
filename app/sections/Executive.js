import CustomButton from "../components/CustomButton";
import TopButton from "../components/TopButton";

import FacultySponsor from "../assets/img/faculty_sponsor/DR. SHAZZAD HOSAIN.jpg";
import Chair from "../assets/img/eb_panel/Md Saeem Hossain Shanto.png";
import ViceChair from "../assets/img/eb_panel/Meherun Nessa Maria.png";
import Secretary from "../assets/img/eb_panel/Tahiat Hakim Himel.png";
import MembershipChair from "../assets/img/eb_panel/Mrittika Sengupta.png";
import Webmaster from "../assets/img/eb_panel/Rawshan Tabbasum Etika.png";
import Image from "next/image";

const Executive = () => {
  const executivePanel = [
    {
      name: "Dr. Tanzilur Rahman",
      designation: "Faculty Sponsor",
      image: FacultySponsor,
    },
    {
      name: "Md Saeem Hossain Shanto",
      designation: "Chair",
      image: Chair,
    },
    {
      name: "Meherun Nessa Maria",
      designation: "Vice Chair",
      image: ViceChair,
    },
    {
      name: "Tahiat Hakim Himel",
      designation: "Secretary",
      image: Secretary,
    },
    // {
    //   name: "Imam Hossain",
    //   designation: "Treasurer",
    //   image: Secretary,
    // },
    {
      name: "Mrittika Sengupta",
      designation: "Membership Chair",
      image: MembershipChair,
    },
    {
      name: "Rowshan Tabassum Etika",
      designation: "Webmaster",
      image: Webmaster,
    },
  ];
  return (
    <div className="relative">
      <h1 className="text-[3rem] font-bold mt-[10.625rem]">EXECUTIVE PANEL</h1>

      {/* Pictures */}
      <div className="flex flex-wrap mt-[5.0625rem] mb-[4.75rem]">
        {executivePanel.map(({ name, designation, image }, index) => {
          return (
            <div
              className={`flex flex-col items-center justify-start mb-[4.19rem] ${
                index == 0
                  ? "basis-[100%] w-full"
                  : index == 1 || index == 2 || index == 3
                  ? "basis-1/3"
                  : "basis-1/2"
              }`}
              key={index}
            >
              <Image
                src={image}
                width={500}
                height={500}
                className="w-[13.75rem] h-[13.75rem] rounded-full border-[#9747FF] hover:border-[#2F92D0] border-[0.625rem]"
                alt={name}
              />
              {/* <img
                className="w-[13.75rem] h-[13.75rem] rounded-full border-[#9747FF] hover:border-[#2F92D0] border-[0.625rem]"
                src={image}
              /> */}
              <h1 className="text-[2rem] text-center">{name}</h1>
              <p className="text-[1.5rem] text-[#2F92D0]">{designation}</p>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="text-center">
        <CustomButton text="See All Teams" type="secondary" />
      </div>

      {/* Top Button */}
      <TopButton />
    </div>
  );
};

export default Executive;
