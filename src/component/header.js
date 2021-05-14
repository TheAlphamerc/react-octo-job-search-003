import "../App.css";

import {
  FiMapPin,
  FiMoon,
  FiSearch,
  FiSun,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";

import { AiFillCheckSquare } from "react-icons/ai";

function Header() {
  return (
    <div className="container max-w-full relative mb-12">
      <header className="bg-primary space-x-4 pl-8 pr-4 pb-14 pt-6 flex place-content-between ">
        <div className="inline-block text-4xl font-bold text-white">
          <h3 >DevJobs</h3>
        </div>
        <div className="object object-right space-x-5 text-white text-2xl">
          <FiSun className="inline-block" />
          <FiToggleLeft className="inline-block" />
          <FiMoon className="inline-block" />
        </div>
      </header>
      <SearchControl />
    </div>
  );
}

function SearchControl() {
  return (
    <div className="max-w-full bg-white shadow-sm ml-10 mr-10 rounded-md absolute top-16 right-0 left-0 grid grid-cols-3 gap-4 px-4  mt-6">
      <div className="flex align-middle place-items-center border-r border-gray-300 py-7  ">
        <FiSearch className="inline-block mr-2 text-primary text-2xl" />
        <input
          className="justify-center"
          type="text"
          placeholder="Filter by text"
        />
      </div>
      <div className="flex align-middle place-items-center border-r border-gray-300">
        <FiMapPin className="inline-block mr-2 text-primary text-2xl" />
        <input
          className="justify-center"
          type="text"
          placeholder="Filter by location"
        />
      </div>
      <div className="justify-between  flex align-middle place-items-center">
        <div className="flex  place-items-center">
          <AiFillCheckSquare className="inline-block text-gray-500 text-2xl mr-2" />
          <h3 className="inline-block text-lg font-semibold">Full Time Only</h3>
        </div>
        <button className="bg-primary text-white font-bold text-xl px-8 py-2 rounded-md justify-self-end">
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
