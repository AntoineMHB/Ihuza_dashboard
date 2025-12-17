import { Button } from "./ui/button";
import { Card, CardTitle } from "./ui/card";

export const UsersCard = () => {
  return (
    <Card className="px-5 mt-5 rounded-bl-none rounded-br-none border-gray-100 bg-white">
      <CardTitle className="font-primary font-bold px-2">
        <div className="flex gap-230">
          <span>Users</span>

          <Button className="font-primary text-light text-white bg-(--primaryBlue)">
            Add User
          </Button>
        </div>
      </CardTitle>
    </Card>
  );
};
