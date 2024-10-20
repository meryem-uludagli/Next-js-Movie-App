"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    {
      name: "Most Popular",
      url: "popular",
    },
    {
      name: "Lates",
      url: "lates",
    },
    {
      name: "Up Coming",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 my-5 bg-gray-100 dark::bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-80 transition-opacity ${
            tab.url === genre
              ? "underline underline-offset-8 text-amber-600"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
