import { Search as SearchIcon, X } from "lucide-react";
import qs from "query-string";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form"; // Import the SubmitHandler type



export const Search = () => {
  const router = useNavigate();
  const { register, handleSubmit, reset, getValues, watch } = useForm();

  const onSubmit = (data) => {
    if (data.search) {
      const url = qs.stringifyUrl(
        {
          url: "/search",
          query,
        },
        { skipEmptyString: true }
      );
      router.push(url);
    }
  };

  const onClear = () => {
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(()=>onSubmit=>(data))}
      className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input
        placeholder="Search"
        className="hidden md:block rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        {...register("search")}
      />
      {watch("search") && (
        <X
          onClick={onClear}
          className="absolute top-2.5 right-14 h-4 w-5 text-muted-foreground cursor-pointer hover: opacity-75 transition"
        />
      )}

      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground"/>
      </Button>
    </form>
  );
};
