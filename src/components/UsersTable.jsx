import { Table, TableHead, TableHeader, TableRow } from "./ui/table";

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
    </Table>
  );
};
