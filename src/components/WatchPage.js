import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closemenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 py-5 m-4 flex  w-full">
      <div className=" ">
        <iframe
          width="800"
          height="450"
          src={
            "https://www.youtube-nocookie.com/embed/" + searchParams.get("v")
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
        

        
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
