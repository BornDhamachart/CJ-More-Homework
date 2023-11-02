import { AiFillBell, AiFillQuestionCircle } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white fixed w-full h-12 z-20 top-0 left-0 border-b border-gray-200 opacity-80 flex justify-end text-xl items-center">
      <div className="text-gray-600 flex gap-4 mr-8">
        <button disabled>
          <AiFillBell />
        </button>
        <button disabled>
          <AiFillQuestionCircle />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
