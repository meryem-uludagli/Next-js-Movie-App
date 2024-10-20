import React from "react";
import Image from "next/image";
const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b7540c83ce918b6dea8db8049c728d69`
  );
  return await res.json();
};
const page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  console.log(movieDetail, "movieDetail");
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
    </div>
  );
};

export default page;
