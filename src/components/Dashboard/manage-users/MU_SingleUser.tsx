import { toast } from "sonner";
import { TUserData } from "../../../types";
import { useToggleUserStateMutation } from "../../../redux/features/user/userApi";
import { errorMessageGenerator } from "../../../utils/errorMessageGenerator";
import { TableCell, TableRow } from "../../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { HomeIcon, PhoneIcon } from "lucide-react";

import UserRoleBadge from "./UserRoleBadge";
import { Switch } from "../../ui/switch";

export const MU_SingleUser = ({
  user,
  index,
}: {
  user: TUserData;
  index: number;
}) => {
  const [toggleState, { isLoading }] = useToggleUserStateMutation();
  const handleUserBlockStatusChange = async () => {
    const toastId = toast.loading("Changing Block Status...");
    try {
      await toggleState(user.id).unwrap();

      toast.success("Block Status Changed Successfully!!", { id: toastId });
    } catch (error) {
      toast.error(errorMessageGenerator(error), { id: toastId });
    }
  };
  // console.log(user);
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <Avatar className="w-10 h-10 bg-card">
          <AvatarImage
            className="object-cover"
            src={user.profile || "/default-user.png"}
            alt={user.name}
          />
          <AvatarFallback>
            {user?.name?.substring(0, 2)?.toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div className="flex items-center space-x-1 text-foreground/70">
            <PhoneIcon className="h-3 w-3" />
            <p className="text-sm">{user.contactNumber}</p>
          </div>

          <div className="flex items-center space-x-1 text-foreground/70">
            <HomeIcon className="h-3 w-3" />
            <p
              className="text-sm truncate max-w-[150px]"
              title={user.address || "Not given"}
            >
              {user.address || "Not given"}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <UserRoleBadge role={user.role} />
      </TableCell>
      <TableCell>
        <Switch
          disabled={isLoading}
          checked={user.isBlock}
          onCheckedChange={handleUserBlockStatusChange}
        />
      </TableCell>
    </TableRow>
  );
};
