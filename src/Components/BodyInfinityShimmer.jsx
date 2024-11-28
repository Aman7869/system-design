import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [memes, setMemes] = useState([])
    const [showShimmer, setShowShimmer] = useState(false);
    const handleScroll = () => {
        // window.scrollY = how much I have scrolled
        // window.innerHeight = height of window(visible section)
        // document.body.scrollHeight = total height of webpage
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            fetchMemes()
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        fetchMemes();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const fetchMemes = async () => {
        setShowShimmer(true);
        const data = await fetch("https://meme-api.com/gimme/20");
        const json = await data.json();
        setShowShimmer(false);
        setMemes((memes) => [...memes, ...json.memes]);
    }
    return (
        <div className='flex flex-wrap justify-evenly'>
            {
                memes?.map((meme, i) => <MemeCard key={i} data={meme} />)
            }
            {showShimmer && <Shimmer />}
        </div>
    )
}

export default Body