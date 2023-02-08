import { FaTicketAlt } from 'react-icons/fa';
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

      <ul className="fixed bottom-0 left-0 right-0 flex justify-evenly py-4 bg-slate-900">
        <li className="font-bold text-orange-700">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="font-bold text-orange-700">
          <Link>Cinema</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
