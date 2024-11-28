import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [memes, setMemes] = useState(null)
    useEffect(() => {
        fetchMemes();
    }, [])

    const fetchMemes = async () => {
        const data = await fetch("https://meme-api.com/gimme/20");
        console.log('data: ', data);
        const json = await data.json();
        console.log('json: ', json);
        setMemes(json?.memes);
    }
    return (
        <div className='flex flex-wrap justify-evenly'>
            {

                !memes ? <Shimmer /> : memes?.map((meme, i) => <MemeCard key={i} data={meme} />)
            }
        </div>
    )
}

export default Body