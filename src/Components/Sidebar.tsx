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
    <div className="h-screen w-16 bg-black pt-20 left-0 bottom-0 fixed z-40">
      <Link to="/" className="flex items-center">
        {/* <img
            src="/logo.png"
            className="h-8 mr-3"
            alt="CJ Logo"
          /> */}
        {/* <span className="text-center text-2xl font-semibold">CJ More</span> */}
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
