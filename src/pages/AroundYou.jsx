/* eslint-disable quotes */
import React from "react";
import { useSelector } from "react-redux";

import { BillboardCard, Error, Loader } from "../components";
import { useGetTopBillboard100Query } from "../redux/services/billboard";

const CountryTracks = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopBillboard100Query({ todayDate });

  if (isFetching) return <Loader title="Loading Billboard Top 100..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        BIllboard Top 100
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <BillboardCard
            key={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
