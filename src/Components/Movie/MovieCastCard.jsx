const MovieCardCast = () => {
  return (
    <div className="mr-3">
      <div className="w-28 bg-slate-300 overflow-hidden rounded-lg">
        <div className="w-full overflow-hidden">
          <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/421cSReX2Fktldac8SyY2k0yLwY.jpg" alt="" className="max-w-full" />
        </div>
        <div className="p-1 text-center text-sm font-semibold">
          <p>Florence pugh</p>
          <p className="opacity-60">Goldilock</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardCast;
