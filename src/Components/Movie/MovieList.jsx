import { GiDirectorChair } from 'react-icons/gi';
import { HiClock, HiFilm, HiOutlineArrowLongRight, HiPlay } from 'react-icons/hi2';
import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import useFetch from '../../Config/useFetch';

const MovieLists = () => {
  const { data, loading, error } = useFetch('/movie/popular');
  return (
    <section id="movie-banner" className="container px-4 mx-auto">
      <div className="flex items-center justify-between ">
        <h2 className="font-bold text-orange-500">Now Playing</h2>
      </div>
      <div className="py-2 flex flex-wrap mb-16">
        {error && console.log(error.message)}
        {loading && <div>Loading...</div>}
        {data && data.data.results.slice(0, 10).map((movie, id) => <MovieCard key={id} MovieDets={movie} />)}
      </div>
    </section>
  );
};

export default MovieLists;
