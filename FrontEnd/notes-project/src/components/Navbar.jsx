import { useState } from "react";
import { getInitial } from "../utils/getInitial";
import Searchbar from "./Searchbar";

function Navbar() {
  const [query, setQuery] = useState("");
  function handleClear() {
    setQuery("");
  }
  // function handleSearch(e) {
  //   setQuery(e.target.value);
  // }

  return (
    <nav className="py-2 px-6 border-b border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Title */}
        <h1 className="text-2xl font-bold">Notes</h1>
        {/* Search Bar */}
        <Searchbar
          query={query}
          setQuery={setQuery}
          handleClear={handleClear}
        />
        {/* Profile */}
        <div className="gap-3 hidden md:flex">
          <div className="w-12 h-12 text-gray-600 bg-gray-200 rounded-full py-3 px-4">
            {getInitial("Ziad Tamer")}
          </div>
          <div>
            <p className="text-gray-600">Ziad Tamer</p>
            <button className="text-gray-400 text-sm hover:underline hover:text-blue-500 cursot-pointer">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
