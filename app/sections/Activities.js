import CustomButton from "../components/CustomButton";
import TopButton from "../components/TopButton";

const Activities = () => {
  const activityImages = [
    // "https://nsusc.acm.org/assets/img/technovation/technovation4.jpg",
    // "https://nsusc.acm.org/assets/img/technovation/technovation3.jpg",
    // "https://nsusc.acm.org/assets/img/technovation/technovation6.jpg",
    // "https://nsusc.acm.org/assets/img/technovation/technovation7.jpg",
    "Research",
    "Sports Programs",
    "Contest",
    "Events",
    "Workshops",
    "Seminars",
    "Study Sessions",
  ];
  return (
    <div className="relative">
      <h1 className="text-[3rem] mt-[7.25rem]">ACTIVITIES FOR MEMBERS</h1>

      {/* Pictures */}
      <div className="grid grid-cols-4 gap-[4.5625rem] mt-[6.5rem] mb-[5.8125rem] mx-auto">
        {activityImages.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[5rem] flex items-center justify-center bg-gray-400 bg-opacity-5 hover:bg-opacity-20 border border-gray-100/50 rounded-[1.875rem] shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-sm text-2xl text-white"
            >
              {item}
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="text-center">
        <CustomButton text="Become A Member" type="secondary" />
      </div>

      <TopButton />
    </div>
  );
};

export default Activities;
