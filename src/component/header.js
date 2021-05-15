import "../App.css";

import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import {
  FiMapPin,
  FiMoon,
  FiSearch,
  FiSun,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";

import { AiFillCheckSquare } from "react-icons/ai";
import React from "react";

class HeaderUpparPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleToggleClick = this.handleClick.bind(this);
  }

  // handleToggleClick() {
  //   console.log(this.isToggleOn);
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  //   console.log(this.isToggleOn);
  // }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="object object-right space-x-2 text-white text-sm">
        <FiSun className="inline-block" />
        <button
          className="outline-none m-0 focus:outline-none"
          onClick={this.handleClick}
        >
          <FaToggleOn
            className={
              "inline-block text-2xl cursor-pointer" + !this.isToggleOn
                ? "hidden"
                : "block"
            }
          />
          <FaToggleOff
            className={
              "inline-block text-2xl cursor-pointer" + this.isToggleOn
                ? "block"
                : "hidden"
            }
          />
        </button>
        <FiMoon className="inline-block" />
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    console.log(this.state.isDisplay);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    var isDisplay = this.state.isToggleOn;
    let toggleButton;
    if (isDisplay) {
      toggleButton = <FaToggleOn className={"inline-block  text-2xl"} />;
    } else {
      toggleButton = <FaToggleOff className={"inline-block text-2xl "} />;
    }
    return (
      <div className="object object-right space-x-2 text-white text-sm items-center flex">
        <FiSun className="inline-block" />
        <button
          className="outline-none m-0 text-3xl focus:outline-none self-center mb-2"
          onClick={this.handleClick}
        >
          {toggleButton}
        </button>
        <FiMoon className="inline-block" />
      </div>
    );
  }
}

function Header() {
  return (
    <div className="container max-w-full relative mb-12">
      <header className="bg-primary space-x-4 pl-8 pr-4 pb-14 pt-6 flex place-content-between ">
        <div className="inline-block text-4xl font-bold text-white">
          <h3>DevJobs</h3>
        </div>
        <Toggle />
      </header>
      <SearchControlSmall />
      <SearchControlLarge />
    </div>
  );
}

function SearchControlLarge() {
  return (
    <div className="hidden md:block">
      <div className="max-w-full bg-white shadow-sm ml-10 mr-10 rounded-md absolute top-16 right-0 left-0 grid grid-cols-3 gap-4 px-4  mt-6 ">
        <div className="flex align-middle place-items-center border-r border-gray-300 py-7 flex-grow ">
          <FiSearch className="inline-block  text-primary text-2xl" />
          <input
            className="flex-grow mx-2 h-7 outline-none"
            type="text"
            placeholder="Filter by text"
          />
        </div>
        <div className="flex align-middle place-items-center border-r border-gray-300 py-3 ">
          <FiMapPin className="inline-block  text-primary text-2xl" />
          <input
            className="flex-grow mx-2 h-7 outline-none"
            type="text"
            placeholder="Filter by location"
          />
        </div>
        <div className="justify-between  flex align-middle place-items-center">
          <div className="flex  place-items-center">
            <AiFillCheckSquare className="inline-block text-primary h-6 w-6 text-2xl mr-2" />
            <h3 className="inline-block text-lg font-semibold overflow-clip overflow-hidden text-center">
              Full Time Only
            </h3>
          </div>
          <button className="bg-primary text-white font-bold text-xl px-8 py-2 rounded-md justify-self-end md:px-5 lg:px-8 hover:bg-primaryLight">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

function SearchControlSmall() {
  return (
    <div className="  md:hidden  ">
      <div className="max-w-full bg-white shadow-sm ml-10 mr-10 rounded-md absolute top-16 right-0 left-0 grid grid-cols-1 px-4 py-5  mt-6 sm:mx-20">
        <div className="flex justify-between">
          <div className="flex place-items-center  flex-grow">
            <FiSearch className="inline-block text-primary text-2xl" />
            <input
              className="flex-grow mx-2 h-7 outline-none"
              type="text"
              placeholder="Filter by text"
            />
          </div>
          <button className="bg-primary text-white font-bold text-xl px-2 py-2 rounded-md justify-self-end inline-block ">
            <FiSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
