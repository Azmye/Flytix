import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <header className="relative">
      <div className="px-4 py-4 container mx-auto lg:px-0">
        <div className="flex items-center">
          <button className="flex flex-col">
            <span className="w-6 h-1 bg-black/80 rounded-full"></span>
            <span className="w-6 h-1 my-1 bg-black/80 rounded-full"></span>
            <span className="w-6 h-1 bg-black/80 rounded-full"></span>
          </button>
          <h1 className="text-sky-500 font-semibold text-xl ml-5">
            Fly<span className="text-orange-500">tix</span>
          </h1>
          <NavbarMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
