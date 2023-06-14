import CustomButton from "../components/CustomButton";
import TopButton from "../components/TopButton";

const Activities = () => {
  const activityImages = [
    "https://nsusc.acm.org/assets/img/technovation/technovation4.jpg",
    "https://nsusc.acm.org/assets/img/technovation/technovation3.jpg",
    "https://nsusc.acm.org/assets/img/technovation/technovation6.jpg",
    "https://nsusc.acm.org/assets/img/technovation/technovation7.jpg",
  ];
  return (
    <div className="relative">
      <h1 className="text-[3rem] mt-[7.25rem]">ACTIVITIES FOR MEMBERS</h1>

      {/* Pictures */}
      <div className="grid grid-rows-2 grid-flow-col gap-[4.5625rem] mt-[6.5rem] mb-[5.8125rem]">
        {activityImages.map((item, index) => {
          return (
            <img
              className="w-[32.5rem] h-[26.8125rem] rounded-[1.875rem]"
              key={index}
              src={item}
            />
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
