import { IoMoonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export const TopNavBar = () => {
  return (
    <div className="h-[60px] w-[1200px] bg-amber-200">
      <div className="flex flex-col-2 gap-[650px]">
        <div className="grid grid-cols-1">
          <span className="font-primary text-xl font-bold">Dashboard</span>
          <span className="font-primary text-sm font-semibold">
            Welcome Back, Admin
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoMoonOutline />
          <IoSettingsOutline />
          <IoMdNotificationsOutline />
          <span className="font-primary text-sm font-semibold">
            Admin@ihuza.com
          </span>
          <MdAccountCircle size={30} />
        </div>
      </div>
    </div>
  );
};
