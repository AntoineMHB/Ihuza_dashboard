import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";

const recentActivities = [
  {
    message: "Product added to inventory",
    product: 'MavBook Pro 16" M3 (PROD2024001)',
    date: "Dec 4, 2024",
  },

  {
    message: "Product assigned to Sarah Johnson",
    product: "Dell ThinkPad X1 Carbon (PROD2024001)",
    date: "Dec 3, 2024",
  },

  {
    message: "Product assigned to Michael Brown",
    product: "Apple MacBook Air M2 (PROD2024001)",
    date: "Dec 2, 2024",
  },

  {
    message: "Product sent for maintenance",
    product: "HP Spectre x360 - Screen replacement required",
    date: "Jan 16, 2024",
  },

  {
    message: "New user registered",
    product: "Amanda White - Staff Member",
    date: "Jan 14, 2024",
  },
];
export const RecentActivityCard = () => {
  return (
    <Card className="flex flex-col bg-white gap-1 px-5 my-5">
      {recentActivities.map((activity) => {
        return (
          <Card>
            <CardTitle>{activity.message}</CardTitle>
            <CardDescription>{activity.product}</CardDescription>
            <CardFooter>{activity.date}</CardFooter>
          </Card>
        );
      })}
    </Card>
  );
};
