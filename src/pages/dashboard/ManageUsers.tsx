import { useLocation, useSearchParams } from "react-router";
import { TQueryParams } from "../../types";
import { useUsersQuery } from "../../redux/features/user/userApi";
import { Users } from "lucide-react";
import SearchItems from "../../components/Shop/SearchItems";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import DefaultPagination from "../../components/Shop/DefaultPagination";
import { Skeleton } from "../../components/ui/skeleton";
import { MU_SingleUser } from "../../components/Dashboard/manage-users/MU_SingleUser";

export const ManageUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queries = new URLSearchParams(location.search);
  const queryArray: TQueryParams[] = Array.from(queries.entries()).map(
    ([key, value]) => ({
      name: key,
      value: value,
    })
  );
  const sort = searchParams.get("sort") || "";
  const params: TQueryParams[] | undefined =
    queryArray.length > 0 ? queryArray : undefined;

  const { data, isLoading } = useUsersQuery(params);
  const isLoadingData = isLoading;
  const users = data?.data || [];
  const meta = data?.meta;
  console.log(users);
  const handleSorting = (field: string) => {
    if (!field) {
      searchParams.delete("sort");
    } else {
      searchParams.set("sort", field);
    }
    setSearchParams(searchParams);
  };
  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Top header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Manage Users</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SearchItems placeholder="Search Users..." />
        <Select value={sort} onValueChange={handleSorting}>
          <SelectTrigger className="w-40 ml-auto">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Featured</SelectItem>
            <SelectItem value="price">Price: Low to High</SelectItem>
            <SelectItem value="-price">Price: High to Low</SelectItem>
            <SelectItem value="name">Name: A-Z</SelectItem>
            <SelectItem value="-name">Name: Z-A</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {isLoadingData ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">No.</TableHead>
              <TableHead>Profile</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              {/* <TableHead className="text-right">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="h-3 w-3 rounded" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-28" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-28" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-12" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-12" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-12" />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Skeleton className="h-8 w-8 rounded-md" />
                      <Skeleton className="h-8 w-8 rounded-md" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">No.</TableHead>
              <TableHead>Profile</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Block</TableHead>
              {/* <TableHead className="text-right">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <MU_SingleUser user={user} index={index} key={user.id} />
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="text-center py-8 text-muted-foreground"
                >
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      {meta && <DefaultPagination meta={meta} />}
    </div>
  );
};
