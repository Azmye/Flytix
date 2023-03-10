import { Link } from 'react-router-dom';
import MovieCard from '../Components/Movie/MovieCard';
import Slideshow from '../Components/Slideshow/Slideshow';
import newsImage1 from '../assets/Images/elijah-wood-amc.avif';
import newsImage2 from '../assets/Images/james-gunn-dcu.avif';
import newsImage3 from '../assets/Images/lady-qi-ra-in-solo-a-star-wars-story.avif';
import NewsPrewCard from '../Components/News/NewsPrewCard';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import useFetch from '../Config/useFetch';
import { useEffect, useState } from 'react';

// const images = [
//   'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
//   'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
//   'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/g0UfxFPjNCBjuv2G0K15Qu6p7zk.jpg',
// ];

const Home = () => {
  const [images, setImages] = useState([]);
  const { data, loading, error } = useFetch('/movie/popular');

  useEffect(() => {
    if (!loading) {
      setImages(data.data.results.slice(0, 3).map((result) => `https://image.tmdb.org/t/p/w500/${result.backdrop_path}`));
    }
  }, [data]);
  return (
    <>
      <main className="pb-24">
        <section id="hero">
          <div className="px-4 container">
            <div className="overflow-hidden rounded-lg">{<Slideshow images={images} />}</div>
          </div>
        </section>
        <section id="now-movie">
          <div className="px-4 pt-4 container">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-orange-500">Now Playing</h2>
              <Link to={'/movies'} className="text-sky-500">
                <HiOutlineArrowLongRight size={33} />
              </Link>
            </div>

            <div className="py-2 flex flex-wrap">
              {error && console.log(error.message)}
              {loading && <div className="my-2 text-orange-500">Loading...</div>}
              {data && data.data.results.slice(0, 4).map((movie, id) => <MovieCard key={id} MovieDets={movie} />)}
              {/* <MovieCard link={'/moviedets'} />
              <MovieCard link={'/moviedets'} />
              <MovieCard link={'/moviedets'} />
              <MovieCard link={'/moviedets'} /> */}
            </div>
          </div>
        </section>
        <section id="movie-news">
          <div className="px-4 pt-4 container">
            <div className="flex items-center justify-between ">
              <h2 className="font-bold text-orange-500">Latest News</h2>
              <Link to={'#'} className="text-slate-500">
                <HiOutlineArrowLongRight size={33} />
              </Link>
            </div>

            <div className="py-2 flex flex-col divide-y divide-orange-500">
              <NewsPrewCard image={newsImage1} dates={`5 February, 2023`} title={`Elijah Wood Slams AMC Theaters For Controversial New Movie Ticket Prices`} />
              <NewsPrewCard image={newsImage2} dates={`3 February, 2023`} title={`Current DCU Slate More Planned Than The Original MCU, Says James Gunn`} />
              <NewsPrewCard image={newsImage3} dates={`2 February, 2023`} title={`New Star Wars Tie-In Reveals The Story Of Han Solo's First Love`} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
