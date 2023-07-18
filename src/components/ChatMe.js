import React from 'react'

const ChatMe = ({name,message}) => {
  return (
    <div className='flex items-center '>
    <img
          className="h-10 p-1 m-21 rounded-xl"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user-icon"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        

    </div>
  )
}

export default ChatMe
