import { FaTicketAlt } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';
import { HiHome } from 'react-icons/hi2';
import { RiBuilding3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <nav className="ml-auto">
      <ul className="text-orange-500 font-semibold">
        <li>
          <Link to={'/ticket'}>
            <FaTicketAlt className="text-2xl" />
          </Link>
        </li>
      </ul>

      <ul className="fixed bottom-0 left-0 right-0 flex justify-evenly py-2 bg-slate-900 z-50">
        <li className="font-bold text-orange-700">
          <Link to={'/'} className="flex flex-col items-center">
            <HiHome size={22} />
            <p className="text-sm">Home</p>
          </Link>
        </li>
        <li className="font-bold text-orange-700">
          <Link to={'/cinemas'} className="flex flex-col items-center">
            <RiBuilding3Fill size={22} />
            <p className="text-sm">Cinemas</p>
          </Link>
        </li>
        <li className="font-bold text-orange-700">
          <Link to={'/movies'} className="flex flex-col items-center">
            <MdMovie size={22} />
            <p className="text-sm">Movies</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
