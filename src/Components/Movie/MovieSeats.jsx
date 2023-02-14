const MovieSeats = ({ seats }) => {
  return seats.map((seat) => {
    if (seat === 9 || seat === 21 || seat === 33 || seat === 45) {
      return (
        <div key={seat} className="flex p-1 ml-5">
          <span className="w-5 h-5 bg-slate-700 rounded-t-lg"></span>
        </div>
      );
    } else {
      return (
        <div key={seat} className="flex p-1">
          <span className="w-5 h-5 bg-slate-700 rounded-t-lg"></span>
        </div>
      );
    }
  });
};

export default MovieSeats;
