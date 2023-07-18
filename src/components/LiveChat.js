import React, { useEffect, useState} from "react";
import ChatMe from "./ChatMe";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [LiveMessage, SetLiveMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Loream ipsum dolar sit amit",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" m-5 flex border border-black w-full h-[430px] bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMe key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault()
        dispatch(
        addMessage({
          name: 'harsh kumar',
          message: LiveMessage,
        })
      );
      SetLiveMessage("")
      }}>
        <input
          className="w-96"
          type="text"
          value={LiveMessage}
          onChange={(e) => {
            SetLiveMessage(e.target.value);
          }}
        />
        <button className="px-2mx-2 bg-green-100">send</button>
      </form>
    </>
  );
};

export default LiveChat;
