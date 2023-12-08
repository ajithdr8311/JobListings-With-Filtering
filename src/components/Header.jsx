import React from "react";
import BACKGROUND from "../assets/images/bg-header-desktop.svg";

const Header = ({ filters, handleClearAllFilters, handleRemoveFilter }) => {
  return (
    <header className="relative flex justify-center">
      <img src={BACKGROUND} className="w-full h-32 bg-primary"></img>
      {filters.size > 0 && (
        <div className="bg-white w-5/6  md:w-[760px] lg:w-[900px] shadow-lg absolute -bottom-7 flex justify-between p-2 rounded-lg">
          <div className="p-2 text-xs font-bold flex flex-wrap">
            {Array.from(filters).map((filter) => {
              return (
                <span
                  key={filter}
                  className="hover:border-2 hover:bg-white hover:text-very-dark-grayish-cyan px-2 py-1 mb-1 rounded-lg mx-1 text-white cursor-pointer bg-green-800"
                  onClick={handleRemoveFilter}
                >
                  {filter}
                </span>
              );
            })}
          </div>
          <button
            className="text-very-dark-grayish-cyan font-bold text-sm hover:underline"
            onClick={handleClearAllFilters}
          >
            clear all
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
