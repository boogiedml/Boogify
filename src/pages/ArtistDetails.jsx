/* eslint-disable quotes */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import {
  useGetArtistDetailsQuery,
  useGetTopSongsQuery,
} from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery({ artistid });
  const { data: artistTopSongs } = useGetTopSongsQuery({ artistid });

  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistid} artistData={artistData?.data[0]} />

      <RelatedSongs
        data={artistTopSongs?.data}
        artistId={artistid}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
