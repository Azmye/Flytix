import { Link } from 'react-router-dom';

const MovieCard = ({ MovieDets, link }) => {
  return (
    <div className="w-1/2 p-2 flex flex-col">
      <div className="bg-slate-900 overflow-hidden rounded-lg">
        <div className="w-full">
          <Link to={link}>
            <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kuf6dutpsT0vSVehic3EZIqkOBt.jpg" className="max-w-full" alt="" />
          </Link>
        </div>
        <div className="text-center py-2">
          <Link to={link}>
            <h5 className="text-orange-500">Order Now</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
