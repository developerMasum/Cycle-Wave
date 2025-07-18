import { ShieldCheckIcon, UserIcon } from "lucide-react";
import { TRole } from "../../../types";
import { Badge } from "../../ui/badge";

const UserRoleBadge = ({ role }: { role: TRole | undefined }) => {
  if (!role) return null;

  const statusConfig = {
    user: {
      icon: <UserIcon className="h-4 w-4 mr-1" />,
      className:
        "bg-gray-200/60 text-gray-800 dark:bg-gray-700/30 dark:text-gray-200 border border-gray-300 dark:border-gray-500 shadow-sm",
    },
    admin: {
      icon: <ShieldCheckIcon className="h-4 w-4 mr-1" />,
      className:
        "bg-red-200/60 text-red-800 dark:bg-red-800/20 dark:text-red-300 border border-red-300 dark:border-red-600 shadow-sm",
    },
  };

  const normalizedRole = role.toLowerCase() as keyof typeof statusConfig;
  const config = statusConfig[normalizedRole] || statusConfig.user;

  return (
    <Badge
      variant="outline"
      className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full transition-all ${config.className}`}
    >
      {config.icon}
      <span className="capitalize">{normalizedRole}</span>
    </Badge>
  );
};

export default UserRoleBadge;
