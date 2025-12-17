import { MetricsCard } from "./MetricsCard";
import { Card, CardDescription } from "./ui/card";
import { FiUsers } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import { TiWarningOutline } from "react-icons/ti";

export const StatsRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-5">
      <Card className="bg-white border border-gray-100 w-[265px]">
        <CardDescription>
          <div className="flex items-center gap-3 px-5">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-(--secondaryBlue) rounded-lg">
              <FiUsers size={20} className="text-(--primaryBlue)" />
            </div>

            <div>
              <div>
                <span className="font-primary font-extrabold text-2xl">
                  116
                </span>
              </div>

              <div>
                <span className="font-primary font-light text-sm text-(--secondaryBlack)">
                  Total Users
                </span>
              </div>
            </div>
          </div>
        </CardDescription>
      </Card>

      <Card className="bg-white border border-gray-100 w-[265px]">
        <CardDescription>
          <div className="flex items-center gap-3 px-5">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-(--secondaryBlue) rounded-lg">
              <BsBoxSeam size={20} className="text-(--primaryBlue)" />
            </div>

            <div>
              <div>
                <span className="font-primary font-extrabold text-2xl">
                  100
                </span>
              </div>

              <div>
                <span className="font-primary font-light text-sm text-(--secondaryBlack)">
                  Total Products
                </span>
              </div>
            </div>
          </div>
        </CardDescription>
      </Card>

      <Card className="bg-white border border-gray-100 w-[265px]">
        <CardDescription>
          <div className="flex items-center gap-3 px-5">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-(--secondaryGreen) rounded-lg">
              <BsCheck2Circle size={20} className="text-(--primaryGreen)" />
            </div>

            <div>
              <div>
                <span className="font-primary font-extrabold text-2xl">10</span>
              </div>

              <div>
                <span className="font-primary font-light text-sm text-(--secondaryBlack)">
                  Assigned Products
                </span>
              </div>
            </div>
          </div>
        </CardDescription>
      </Card>

      <Card className="bg-white border border-gray-100 w-[265px]">
        <CardDescription>
          <div className="flex items-center gap-3 px-5">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-(--secondaryBrown) rounded-lg">
              <TiWarningOutline size={20} className="text-(--primaryBrown)" />
            </div>

            <div>
              <div>
                <span className="font-primary font-extrabold text-2xl">90</span>
              </div>

              <div>
                <span className="font-primary font-light text-sm text-(--secondaryBlack)">
                  Unassigned Products
                </span>
              </div>
            </div>
          </div>
        </CardDescription>
      </Card>
    </div>
  );
};
