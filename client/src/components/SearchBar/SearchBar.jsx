import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import classes from "./SearchBar.module.scss";
import { IoSearch, IoClose } from "react-icons/io5";
import { useClickOutside } from "react-click-outside-hook";
import PuffLoader from "react-spinners/PuffLoader";
import { useDebounce } from "../../hooks/useDebounce";
import { getSearchProduct } from "../../services/products";
import SearchContent from "./SearchContent/SearchContent";

const SearchBar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [findedContent, setFindedContent] = useState([]);

  const isEmpty = !findedContent || findedContent.length === 0;

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const expandContainer = () => {
    setExpanded(true);
  };
  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    setFindedContent([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    if (isClickOutside) {
      collapseContainer();
    }
  }, [isClickOutside]);

  const searchBooks = async () => {
    if (!searchQuery || searchQuery.trim() === "") {
      return;
    }
    setLoading(true);
    const result = await getSearchProduct(searchQuery);

    if (result) {
      setFindedContent(result);
    }
    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchBooks);

  return (
    <motion.div
      animate={
        isExpanded ? { height: "20em", zIndex: "99" } : { height: "3.3em" }
      }
      ref={parentRef}
      className={classes.search__container}
    >
      <div className={classes.search__input_container}>
        <IoSearch className={classes.search__icon} />
        <input
          ref={inputRef}
          type="text"
          placeholder="search for manga"
          onFocus={expandContainer}
          onChange={changeHandler}
          value={searchQuery}
        />
        {isExpanded && (
          <button
            onClick={collapseContainer}
            className={classes.search__icon_btn}
          >
            <IoClose
              className={classes.search__icon_close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        )}
      </div>

      <div className={classes.search__content}>
        {isLoading && (
          <div className={classes.search__content_loader}>
            <PuffLoader loading={isLoading} color="purple" size={60} />
          </div>
        )}
        {!isLoading && isEmpty && <div>No items found</div>}
        {!isLoading &&
          !isEmpty &&
          findedContent.map((item) => (
            <SearchContent
              collapseContainer={collapseContainer}
              imageSrc={item.imageUrls[0]}
              title={item.name}
              itemNo={item.itemNo}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default SearchBar;
