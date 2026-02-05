"use client";

import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const ClearFilterButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const hasFilter =
    searchParams.get("q") || searchParams.get("category");

  if (!hasFilter) return null; // ✅ show only when filtering

  return (
    <button
      onClick={() => router.push("/")}
      className="text-sm text-green-700 border 
      rounded-md px-3 py-1 hover:bg-red-600 hover:text-white transition flex items-center justify-center font-bold"
    >
      <X size={18}/>
    </button>
  );
};

export default ClearFilterButton;
