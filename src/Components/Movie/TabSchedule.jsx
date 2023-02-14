import { useState } from 'react';
import MovieSeats from './MovieSeats';

const TabSchedule = () => {
  const seats = Array.from({ length: 48 }, (_, i) => i);
  return (
    <>
      <section id="Dates" className="px-4 py-2 container">
        <h2 className="font-semibold text-orange-500">Dates</h2>
        <ul className="flex whitespace-nowrap overflow-scroll scrollbar-hide py-2 pb-3">
          <li className="px-4 py-1 font-semibold mr-1 bg-slate-300 rounded-full hover:text-sky-500">5 february 2023</li>
          <li className="px-4 py-1 font-semibold mr-1 bg-slate-300 rounded-full hover:text-sky-500">6 february 2023</li>
          <li className="px-4 py-1 font-semibold mr-1 bg-slate-300 rounded-full hover:text-sky-500">7 february 2023</li>
        </ul>
      </section>

      <section id="times" className="px-4 py-2 container">
        <h2 className="font-semibold text-orange-500">Times</h2>
        <ul className="flex py-2 gap-2">
          <li className="px-4 py-1 font-semibold bg-slate-300 rounded-full hover:text-sky-500">10:00 AM</li>
          <li className="px-4 py-1 font-semibold bg-slate-300 rounded-full hover:text-sky-500">13:00 PM</li>
          <li className="px-4 py-1 font-semibold bg-slate-300 rounded-full hover:text-sky-500">16:00 PM</li>
        </ul>
      </section>

      <section id="seat" className="px-4 py-2 container">
        <h2 className="font-semibold text-orange-500">Seat</h2>
        <div className="my-2">
          <div id="screen" className="">
            <div className="bg-slate-900 rounded-t-lg shadow-xl shadow-sky-300 w-full h-20 "></div>
          </div>

          <div id="seats" className="mb-20 mt-5 flex flex-wrap">
            {<MovieSeats seats={seats} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default TabSchedule;
