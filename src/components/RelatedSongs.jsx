/* eslint-disable quotes */
import React from "react";
import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="flex flex-col">
    {data && (
      <>
        {data.tracks ||
          (Array.isArray(data) && (
            <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
          ))}
        <div className="mt-6 w-full flex flex-col">
          {data.tracks && Array.isArray(data.tracks)
            ? data.tracks.map((song, i) => (
              <SongBar
                key={`${artistId}-${song.key}-${i}`}
                song={song}
                i={i}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
              />
            ))
            : data
              && Array.isArray(data)
              && data.map((song, i) => (
                <SongBar
                  key={`${artistId}-${song.key}-${i}`}
                  song={song}
                  i={i}
                  artistId={artistId}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  handlePauseClick={handlePauseClick}
                  handlePlayClick={handlePlayClick}
                />
              ))}
        </div>
      </>
    )}
  </div>
);

export default RelatedSongs;
