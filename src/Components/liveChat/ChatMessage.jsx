import React from 'react'

const ChatMessage = ({name,photo,message}) => {
  return (
    <div className='flex p-2'>
        <img src={photo} alt={name} className='w-8 h-8 m-2 rounded-full' />
        <p><span>{name} - </span>
        <span>{message}</span>
        </p>
    </div>
  )
}

export default ChatMessage