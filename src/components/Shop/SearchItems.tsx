import { Search } from "lucide-react";

import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SearchItems({
  placeholder = "Search...",
}: {
  placeholder?: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchingTextParams = searchParams.get("searchTerm") || "";
  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchingText = e.target.searchTerm.value;

    if (!searchingText) {
      searchParams.delete("searchTerm");
    } else {
      searchParams.set("searchTerm", searchingText);
    }
    setSearchParams(searchParams);
  };
  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <Input
        name="searchTerm"
        defaultValue={searchingTextParams}
        placeholder={placeholder}
      />
      <Button variant={"outline"} size={"icon"}>
        <Search />
      </Button>
    </form>
  );
}
