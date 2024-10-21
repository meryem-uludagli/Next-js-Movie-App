"use client";
import React from "react";
import Image from "next/image";

const Movies = ({ dt }) => {
  console.log(dt, "dt");
  return (
    <div className="min-w-[470px] relative imgContainer cursor-pointer">
      <Image
        style={{ objectFit: "cover" }}
        width={470}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{dt?.title}</div>
        <div>
          {dt?.release_date} - {dt?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
