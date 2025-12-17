import { IoMoonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export const TopNavBar = () => {
  return (
    <div className="h-[60px] w-[1080px]  bg-white border border-gray-200">
      <div className="px-10 flex flex-col-2 gap-[585px]">
        <div className="grid grid-cols-1">
          <span className="font-primary text-xl font-bold">Dashboard</span>
          <span className="font-primary text-sm font-medium text-(--secondaryBlack)">
            Welcome Back, Admin
          </span>
        </div>

        <div className="flex items-center gap-5">
          <IoMoonOutline />
          <IoSettingsOutline />
          <IoMdNotificationsOutline />
          <div className="flex items-center gap-2">
            <span className="font-primary text-sm font-medium text-(--secondaryBlack)">
              Admin@ihuza.com
            </span>
            <MdAccountCircle size={35} className="text-(--primaryBlue)" />
          </div>
        </div>
      </div>
    </div>
  );
};
