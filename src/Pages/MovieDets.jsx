import { HiClock, HiPlay, HiFilm } from 'react-icons/hi2';
import { GiDirectorChair } from 'react-icons/gi';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import TabOverview from '../Components/Movie/TabOverview';
import TabSchedule from '../Components/Movie/TabSchedule';
import useFetch from '../Config/useFetch';
const MovieDets = () => {
  const [tabIndex, setTabIndex] = useState(true);
  const params = useParams();
  const { data: movie, loading, error } = useFetch(`/movie/${params.id}`, 'videos, photos');
  if (!loading) {
    if (error != null) {
      console.log(error);
    } else {
      console.log(movie);
    }
  }
  return (
    <>
      {error && console.log(error.message)}
      {loading && <div>Loading...</div>}
      {movie && (
        <>
          <section id="movie-banner">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-50 bg-no-repeat bg-[url('https://www.themoviedb.org/t/p/w533_and_h300_bestv2/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg')] ">
                <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-40 bg-slate-500/60"></div>
              </div>
              <div className="flex">
                <div className="w-44 p-8 overflow-hidden">
                  <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" className="max-w-full rounded-lg" alt="" />
                </div>

                <div className="pt-12 text-white/80">
                  <h5 className="text-white font-semibold text-lg">Wakanda Forever</h5>
                  <div className="flex gap-2 items-center">
                    <HiFilm />
                    <ul className="flex items-center">
                      <li>Action</li>
                      <li>, Drama</li>
                    </ul>
                  </div>
                  <div className="flex gap-2 items-center">
                    <HiClock /> <span>2 Hours, 1 Minutes</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <GiDirectorChair /> <span>Muhammad Azmi</span>
                  </div>
                  <div className="flex ">
                    <Link className="flex items-center gap-2">
                      <HiPlay /> <span>Play Trailer</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="tab-overview-and-schedule">
            <div className="flex justify-evenly">
              <button className={`w-1/2 py-2 font-semibold bg-slate-300/60 backdrop-blur-md border-t-2 text-slate-900 outline-none hover:bg-slate-400 hover:border-t-2 ${tabIndex ? 'bg-slate-400' : ''}`} onClick={() => setTabIndex(true)}>
                Overview
              </button>
              <button className={`w-1/2 py-2 font-semibold bg-slate-300/60 backdrop-blur-md border-t-2 text-slate-900 outline-none hover:bg-slate-400 hover:border-t-2 ${!tabIndex ? 'bg-slate-400' : ''}`} onClick={() => setTabIndex(false)}>
                Buy Ticket
              </button>
            </div>

            {tabIndex ? <TabOverview /> : <TabSchedule />}
          </section>
        </>
      )}
    </>
  );
};

export default MovieDets;
