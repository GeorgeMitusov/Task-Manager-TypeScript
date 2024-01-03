import React from "react";
import { MdSearch } from "react-icons/md";
import "../styles/Search.scss";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search: React.FC<Props> = ({
  setSearchValue,
  searchValue,
  isSearching,
  setIsSearching,
}) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function toggleIsSearching() {
    setIsSearching((prevIsSearching) => !prevIsSearching);
  }

  return (
    <div className="todo-search">
      <AnimatePresence>
        {isSearching && (
          <motion.input
            type="text"
            value={searchValue}
            placeholder="search"
            className="todo-search-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 1 }}
          />
        )}
      </AnimatePresence>

      <button className="todo-search-btn" onClick={toggleIsSearching}>
        {" "}
        <MdSearch />{" "}
      </button>
    </div>
  );
};

export default Search;
