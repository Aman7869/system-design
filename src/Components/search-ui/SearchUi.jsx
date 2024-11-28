import React, { useEffect, useState } from 'react'

const SearchUi = () => {
    const [searchText, setSearchText] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [cache, setCache] = useState({})
    useEffect(() => {
        //Debouncing
        const s = setTimeout(() => {
            fetchData();
        }, 300)
        return () => clearTimeout(s);
    }, [searchText])

    const fetchData = async () => {
        if (cache[searchText]) {
            setSearchResult(cache[searchText]);
        } else {
            const data = await fetch("https://www.google.com/complete/search?client=firefox&q=" + searchText)
            const json = await data.json();
            console.log('json: ', json);
            cache[searchText] = json[1];
            setSearchResult(json[1]);
        }

    }
    return (
        <div className='m-10'>
            <input type='search' className='border border-black p-2 w-96 shadow-lg' value={searchText} onChange={(e) => setSearchText(e.target.value)} onFocus={() => setIsResultVisible(true)} onBlur={() => setIsResultVisible(false)} />
            {searchResult.length > 0 && isResultVisible && (
                <ul className='p-2 border border-black w-96 text-left shadow-lg'>
                    {
                        searchResult?.map((item, i) =>
                            <li className='hover:bg-gray-200 cursor-pointer' key={i}>{item}</li>
                        )
                    }
                </ul>
            )}
        </div>
    )
}

export default SearchUi