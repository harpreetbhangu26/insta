import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonSearch = () => (
  <div className=" grid grid-cols-3 gap-0.5 p-0 m-0  ">
    <div className="gap-0.5 gap-y-0 ">
      <Skeleton className="h-48 w-full bg-gray-300" />
      <Skeleton className="h-48 w-full mt-0.5 bg-gray-300" />
    </div>
    <div className="gap-0.5 gap-x-0.5">
      <Skeleton className="h-48 w-full bg-gray-300" />
      <Skeleton className="h-48 w-full mt-0.5 bg-gray-300" />
    </div>
    <div className="gap-0.5">
      <Skeleton className="h-full w-full bg-gray-300" />
    </div>
  </div>
);

export default SkeletonSearch;
