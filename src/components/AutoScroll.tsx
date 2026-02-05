"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const AutoScroll = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hasFilter =
      searchParams.get("q") || searchParams.get("category");

    if (hasFilter) {
      const el = document.getElementById("products");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return null;
};

export default AutoScroll;
