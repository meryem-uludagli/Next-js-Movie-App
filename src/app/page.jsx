import React from "react";
import Movies from "@/components/Movies";

const page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=b7540c83ce918b6dea8db8049c728d69&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  console.log(data, "data");

  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default page;
