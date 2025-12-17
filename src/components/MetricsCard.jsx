import { Card, CardDescription } from "./ui/card";
import { FiUsers } from "react-icons/fi";

export const MetricsCard = () => {
  return (
    <Card className="bg-white border border-gray-100 w-[265px]">
      <CardDescription>
        <div className="flex items-center gap-3 px-5">
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-(--secondaryBlue) rounded-lg">
            <FiUsers size={20} className="" />
          </div>

          <div>
            <div>
              <span className="font-primary font-extrabold text-2xl">116</span>
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
  );
};
