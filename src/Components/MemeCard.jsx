import React from 'react'

const MemeCard = ({data}) => {
    const {url, title, author} = data;
  return (

    <div className='p-5 m-5 border border-black rounded-lg'>
        <img src={url} className='w-64 h-64 ' alt="card" />
        <p className=''>{author}</p>
    </div>
  )
}

export default MemeCard