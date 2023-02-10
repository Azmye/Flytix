import MovieCardCast from './MovieCastCard';

const TabOverview = () => {
  return (
    <>
      <section id="trailer">
        <div className="px-4 pt-3 container mx-auto">
          <h3 className="text-orange-500 font-semibold mb-3">Trailer</h3>
          <div className="w-full pt-[60%] relative overflow-hidden">
            <iframe
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-lg"
              src=""
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section id="overview" className="pt-3">
        <div className="px-4 container mx-auto">
          <h3 className="text-orange-500 font-semibold">Overview</h3>
          <p className="text-justify text-sm text-black/80">
            Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must
            band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.
          </p>
        </div>
      </section>

      <section id="cast">
        <div className="px-4 pt-3 pb-32 container mx-auto">
          <h3 className="text-orange-500 font-semibold">Cast</h3>
          <div className="flex whitespace-nowrap overflow-scroll scrollbar-hide pt-2">
            <MovieCardCast />
            <MovieCardCast />
            <MovieCardCast />
            <MovieCardCast />
          </div>
        </div>
      </section>
    </>
  );
};

export default TabOverview;
