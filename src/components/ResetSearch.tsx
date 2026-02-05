"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ResetSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const isRefreshed = sessionStorage.getItem("refreshed");

    if (searchParams.get("q") || searchParams.get("category") && isRefreshed) {
      router.replace("/"); 
    }

    sessionStorage.setItem("refreshed", "true");
  }, []);

  return null;
};

export default ResetSearch;
