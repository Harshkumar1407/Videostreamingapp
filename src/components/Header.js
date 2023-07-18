import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/SearchSlice";
import store from "../utils/store";
import { searchText } from "../utils/videoInfo";

const Header = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

const searchCache=useSelector((store)=>store.search)


  useEffect(() => {
    //console.log(searchQuery);
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions((searchCache[searchQuery]))
      }else
      getSearchSuggetion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(cacheResult({ [searchQuery]: json[1] }));

    //console.log(json);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };



  const submitText = (e) => {
    e.preventDefault();
    dispatch(searchText(searchQuery));
    setShowSuggestions(false);
  };


  return (
    <div className="flex justify-between fixed w-full h-14 bg-white">
      <div className="flex ">
        <img
          className="h-11 p-2 m-2"
          onClick={() => toggleMenuHandler()}
          src="https://tse3.mm.bing.net/th?id=OIP.-nG_tVptnf4oGmIzd7dKVgHaHa&pid=Api&P=0&h=180"
          alt="menu"
        ></img>
        <a href="/">
          <img
            className="h-14"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="youtube-logo"
          ></img>
        </a>
      </div>
      <div className="flex ">
        <form action="" onSubmit={(e) => submitText(e)}>
          <input
            className="w-[500px] border border-gray-200 rounded-l-full p-2 my-2 shadow-sm h-10"
            type="text"
            value={searchQuery}
            onChange={(e) => setSerachQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            //onBlur={() => setShowSuggestions(false)}
            placeholder="search"
          />
          </form>
          <button className="rder border-gray-300 rounded-r-full my-2  p-2 bg-gray-100 w-14 h-10 shadow-sm">
          <span
              className="material-symbols-outlined font-light"
              onClick={() => dispatch(searchText(searchQuery))}
            >
              search
            </span>
          </button>
        
        {showSuggestions && (
          <div className="fixed bg-white w-[500px] my-14 py-1 px-3 shadow-lg rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="list-none py-1 px-2">
                   {s}
                </li>
              ))}
            </ul>
          </div>
        )}
        <span className="material-symbols-outlined m-3  hover:bg-gray-200 rounded-full p-1">
          mic
        </span>
      </div>
     
      <div className="flex">
      <span className="material-symbols-outlined font-thin m-4 hover:bg-gray-200 rounded-full p-1">
          auto_videocam
        </span>
        <span className="material-symbols-outlined font-thin m-4  hover:bg-gray-200 rounded-full p-1">
          notifications
        </span>
        <img
          className="h-11 p-2 m-2 rounded-xl"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user-icon"
        />
      </div>
      
    </div>
  );
};

export default Header;
