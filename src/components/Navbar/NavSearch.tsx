import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const NavSearch = () => {
  return (
    <div className="mt-2 flex w-full items-center md:mt-0 md:px-5 lg:max-w-[400px]">
      <Input
        type="search"
        placeholder="Search"
        className="h-8 rounded-br-none rounded-tr-none border border-foreground !ring-0 sm:h-10 md:border-[1.5px] md:border-primary"
      />
      <Button
        type="submit"
        className="hidden h-8 rounded-bl-none rounded-tl-none px-3 sm:h-10 sm:px-4 md:block"
      >
        <p className="hidden lg:block">Search</p>
        <Search className="h-4 w-4 lg:hidden" />
      </Button>

      <div className="flex h-8 items-center justify-center rounded-md rounded-bl-none rounded-tl-none border border-l-0 border-foreground px-3 md:hidden">
        <Search />
      </div>
    </div>
  );
};

export default NavSearch;
