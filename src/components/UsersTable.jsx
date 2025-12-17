import { Avatar, AvatarFallback } from "./ui/avatar";
import { IoPersonCircleOutline } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const users = [
  {
    name: "John Smith",
    email: "john.smith@ihuza.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2 hours ago",
  },

  {
    name: "Sarah Johnson",
    email: "sarah.j@ihuza.com",
    role: "Manager",
    status: "Active",
    lastLogin: "5 hours ago",
  },

  {
    name: "Michael Brown",
    email: "m.brown@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "1 day ago",
  },

  {
    name: "Emily Davis",
    email: "emily.d@ihuza.com",
    role: "Staff",
    status: "Inactive",
    lastLogin: "3 days ago",
  },

  {
    name: "David Wilson",
    email: "d.wilson@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "6 hours ago",
  },

  {
    name: "Lisa Anderson",
    email: "lisa.a@ihuza.com",
    role: "Manager",
    status: "Active",
    lastLogin: "30 min ago",
  },

  {
    name: "Robert Taylor",
    email: "r.taylor@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "2 days ago",
  },

  {
    name: "Jennifer Miller",
    email: "j.miller@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "4 hours ago",
  },

  {
    name: "Christopher Lee",
    email: "c.lee@ihuza.com",
    role: "Admin",
    status: "Active",
    lastLogin: "1 hours ago",
  },

  {
    name: "Amanda White",
    email: "a.white@ihuza.com",
    role: "Staff",
    status: "Inactive",
    lastLogin: "1 week ago",
  },
];

export const UsersTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <span className="px-5 font-primary text-(--secondaryBlack) font-bold text-sm">
              USER
            </span>
          </TableHead>
          <TableHead className="font-primary text-(--secondaryBlack) font-bold text-sm">
            ROLE
          </TableHead>
          <TableHead className="font-primary text-(--secondaryBlack) font-bold text-sm">
            STATUS
          </TableHead>
          <TableHead className="font-primary text-(--secondaryBlack) font-bold text-sm">
            LAST LOGIN
          </TableHead>
          <TableHead className="font-primary text-(--secondaryBlack) font-bold text-sm">
            ACTIONS
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {users.map((user) => (
          <TableRow key={user.name}>
            <TableCell className="px-5">
              <div className="flex gap-2">
                <Avatar className="pt-2">
                  <AvatarFallback>
                    <IoPersonCircleOutline
                      size={50}
                      className="text-(--secondaryBlack)"
                    />
                  </AvatarFallback>
                </Avatar>

                <div className="grid grid-cols-1 gap-1">
                  <span className="font-primary text-sm font-bold">
                    {user.name}
                  </span>
                  <span className="font-primary text-sm font-medium text-(--secondaryBlack)">
                    {user.email}
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge text={user.role} />
            </TableCell>
            <TableCell>
              <Badge text={user.status} />
            </TableCell>
            <TableCell>{user.lastLogin}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
