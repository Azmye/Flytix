import { Link } from 'react-router-dom';

const MovieCard = ({ MovieDets }) => {
  return (
    <div className="w-1/2 p-2 flex flex-col">
      <div className="bg-slate-900 overflow-hidden rounded-lg">
        <div className="w-full">
          <Link to={`moviedets/${MovieDets.id}`}>
            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${MovieDets.poster_path}`} className="max-w-full" alt="" />
          </Link>
        </div>
        <div className="text-center py-2">
          <Link to={`moviedets/${MovieDets.id}`}>
            <h5 className="text-orange-500">Book Now</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
