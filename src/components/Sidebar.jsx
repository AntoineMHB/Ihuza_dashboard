import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { RiMenu5Fill } from "react-icons/ri";
import { SiDatabricks } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <>
      <div className="w-50 h-125 bg-white flex flex-col gap-5">
        <div className="py-10">
          <img src="" alt="logo" />
        </div>

        <div className="h-10 rounded-lg mx-5 flex items-center gap-4 hover:bg-(--secondaryBlue) hover:text-(--primaryBlue)">
          <MdDashboard size={20} className="" />
          <span className="font-primary text-sm font-bold">Dashboard</span>
        </div>

        <div className="h-10 rounded-lg mx-5 flex items-center gap-4 hover:bg-(--secondaryBlue) hover:text-(--primaryBlue)">
          <FiUsers size={20} className="" />
          <span className="font-primary text-sm font-bold">Users</span>
        </div>

        <div className="h-10 rounded-lg mx-5 flex items-center gap-4 hover:bg-(--secondaryBlue) hover:text-(--primaryBlue)">
          <BsBoxSeam size={20} className="" />
          <span className="font-primary text-sm font-bold">Products</span>
        </div>

        <div className="h-10 rounded-lg mx-5 flex items-center gap-4 hover:bg-(--secondaryBlue) hover:text-(--primaryBlue)">
          <RiMenu5Fill size={20} className="" />
          <span className="font-primary text-sm font-bold">Assignments</span>
        </div>

        <div className="h-10 rounded-lg mx-5 flex items-center gap-4 hover:bg-(--secondaryBlue) hover:text-(--primaryBlue)">
          <SiDatabricks size={20} className="" />
          <span className="font-primary text-sm font-bold">Categories</span>
        </div>

        <div className="h-10 w-40 rounded-lg mx-5 flex items-center gap-4 hover:bg-(--secondaryBlue) hover:text-(--primaryBlue)">
          <IoLogOutOutline size={20} className="" />
          <span className="font-primary text-sm font-bold">Logout</span>
        </div>
      </div>
    </>
  );
};
