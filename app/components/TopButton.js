import { BsChevronUp } from "react-icons/bs";

const TopButton = () => {
  return (
    <button className="w-[3rem] h-[3rem] bg-[#9747FF] rounded-full flex items-center justify-center -mt-5 absolute left-[100%]">
      <BsChevronUp />
    </button>
  );
};

export default TopButton;
