import React from "react";
import Movies from "@/components/Movies";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b7540c83ce918b6dea8db8049c728d69&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();

  return (
    <div>
      {data?.results && data.results.length > 0 ? (
        data.results.map((dt, i) => <Movies key={i} dt={dt} />)
      ) : (
        <div>Aranılan bulunamadı!!</div>
      )}
    </div>
  );
};

export default Page;
