import {
  AiFillAppstore,
  AiFillCalendar,
  AiFillDatabase,
  AiFillPieChart,
  AiFillProject,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-16 bg-black pt-2 left-0 bottom-0 fixed z-40">
      <Link to="/" className="flex justify-center mb-10">
        <img src="/logo2.png" className="p-2" alt="CJ Logo" />
      </Link>
      <div className="flex-col flex gap-8 items-center text-xl text-gray-200">
        <Link
          to="/"
          className="rounded-full p-2 hover:bg-gray-400 hover:bg-opacity-50  hover:text-white"
        >
          <AiFillAppstore />
        </Link>
        <button disabled>
          <AiFillCalendar />
        </button>
        <button disabled>
          <AiFillDatabase />
        </button>
        <button disabled>
          <AiFillPieChart />
        </button>
        <button disabled>
          <AiFillProject />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
