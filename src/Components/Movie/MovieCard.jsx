const MovieCard = ({ MovieDets }) => {
  return (
    <div className="w-1/2 p-2 flex flex-col">
      <div className="bg-slate-900 overflow-hidden rounded-lg">
        <div className="w-full">
          <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kuf6dutpsT0vSVehic3EZIqkOBt.jpg" className="max-w-full" alt="" />
        </div>
        <div className="text-center py-2">
          <h5 className="text-orange-500">Order Now</h5>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
