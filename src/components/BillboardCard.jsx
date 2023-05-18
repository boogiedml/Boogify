const BillboardCard = ({ song, i }) => (
  <div
    key={i}
    className="flex flex-col w-[210px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
    <div className="w-full relative h-54 group">
      <img src={song.image} alt="song_img" />
    </div>
    <div className="flex items-center justify-between my-4 text-white">
      <p className="font-semibold text-xl">{song.rank}</p>
      {song.change}
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-white truncate">{song.title}</p>
      <p className="text-sm truncate text-gray-300 mt-1">{song.artist}</p>
    </div>
  </div>
);

export default BillboardCard;
