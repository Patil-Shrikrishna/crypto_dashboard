import { GrBitcoin } from "react-icons/gr";
const Navbar = () => {
  return (
    <nav className="border-b py-4 backdrop-blur sticky top-0 left-0 right-0 bg-opacity-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 font-extrabold text-xl flex items-center gap-1">
          COINBASE
          <GrBitcoin className="text-teal-500" />
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
