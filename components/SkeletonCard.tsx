import { Card } from "./ui/card";
import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <Card className="min-w-[290px] max-w-[370px] h-[400px]">
      <Skeleton className="w-full h-[200px] rounded-t-lg" />
      <div className="p-3">
        <Skeleton className="w-3/4 h-4 mb-2" />
        <Skeleton className="w-1/2 h-4 mb-2" />
        <Skeleton className="w-1/4 h-4 mb-2" />
        <Skeleton className="w-1/2 h-4" />
      </div>
      <div className="flex justify-between items-center gap-2 p-3">
        <Skeleton className="w-1/2 h-11" />
        <Skeleton className="w-1/2 h-11" />
      </div>
    </Card>
  );
};

export default SkeletonCard;
