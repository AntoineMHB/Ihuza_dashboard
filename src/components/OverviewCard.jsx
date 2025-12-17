import { BsBoxSeam } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";

export const OverviewCard = () => {
  return (
    <div className="bg-(--primaryBlue) w-[1120px] py-[15px] px-[15px] rounded-[15px] h-[130px]">
      <div className="flex gap-2">
        <div className="flex items-center justify-center rounded-[5px] w-[40px] h-[40px] bg-gray-200">
          <BsBoxSeam size={20} color="white" />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div>
            <span
              className="font-primary font-bold
             text-lg text-white"
            >
              iHUZA INVENTORY - System Overview
            </span>
          </div>

          <div>
            <span className="font-primary font-extralight text-[12px] text-gray-200">
              Monitor your iHUZA inventory and protect assignments in real-time
            </span>
          </div>

          <div className="flex gap-2">
            <BsCheck2Circle size={20} color="#05f746" />
            <span className="font-primary font-extralight text-[12px] text-white">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
