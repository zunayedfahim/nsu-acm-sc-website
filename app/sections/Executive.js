import CustomButton from "../components/CustomButton";
import TopButton from "../components/TopButton";

const Executive = () => {
  const executivePanel = [
    {
      name: "Md Saeem Hossain Shanto",
      designation: "Chair",
      image:
        "https://nsusc.acm.org/assets/img/present-eb/Md%20Saeem%20Hossain%20Shanto.png",
    },
    {
      name: "Meherun Nessa Maria",
      designation: "Vice Chair",
      image:
        "https://nsusc.acm.org/assets/img/present-eb/Meherun%20Nessa%20Maria.png",
    },
    {
      name: "Tahiat Hakim Himel",
      designation: "Secretary",
      image:
        "https://nsusc.acm.org/assets/img/present-eb/Tahiat%20Hakim%20Himel.png",
    },
    {
      name: "Imam Hossain",
      designation: "Treasurer",
      image:
        "https://nsusc.acm.org/assets/img/present-eb/Md%20Imam%20Hossain.png",
    },
    {
      name: "Mrittika Sengupta",
      designation: "Membership Chair",
      image:
        "https://nsusc.acm.org/assets/img/present-eb//Mrittika%20Sengupta.png",
    },
    {
      name: "Rowshan Tabassum Etika",
      designation: "Webmaster",
      image:
        "https://nsusc.acm.org/assets/img/present-eb/Rawshan%20Tabbasum%20Etika.png",
    },
  ];
  return (
    <div className="relative">
      <h1 className="text-[3rem] font-bold mt-[10.625rem]">EXECUTIVE PANEL</h1>

      {/* Pictures */}
      <div className="flex items-center justify-center flex-wrap mt-[5.0625rem] mb-[4.75rem] gap-[6.375rem]">
        {executivePanel.map(({ name, designation, image }, index) => {
          return (
            <div
              className={`flex flex-col items-center justify-center  ${
                index == 0 ? "basis-[100%]" : ""
              }`}
              key={index}
            >
              <img
                className="w-[13.75rem] h-[13.75rem] rounded-full border-[#9747FF] hover:border-[#2F92D0] border-[0.625rem]"
                src={image}
              />
              <h1 className="text-[2rem]">{name}</h1>
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
