import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
const LIMIT = 10;
const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [noOfPage, setNoOfPage] = useState(0);
    useEffect(() => {
        console.log('products: ', products);
        console.log("useEffect run");
        fetchProducts();
    }, [currentPage])
    const fetchProducts = async () => {
        const data = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}&select=title,price,description,thumbnail,discountPercentage`);
        const json = await data.json();
        setProducts(json.products);
        setNoOfPage(Math.ceil(json.total / LIMIT));

    }
    return (
        <div>
            <div className='flex flex-wrap'>
                {
                    products?.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                }
            </div>
            <div className='p-10 cursor-pointer'>
                {currentPage > 0 && (
                    <span
                        onClick={() => {
                            setCurrentPage((currentPage) =>  Math.max(currentPage - 1, 0));
                        }}
                    >
                        Prev
                    </span>
                )}

                {[...Array(noOfPage).keys()].map((pN) => (
                    <span className={'text-xl p-2 ' + (pN === currentPage && 'font-bold underline')} key={pN} onClick={() => setCurrentPage(pN)}>{pN+1}</span>
                ))
                }
                {
                    currentPage < noOfPage - 1 && (
                        <span onClick={() => setCurrentPage((currentPage) => currentPage + 1)}>
                            Next
                        </span>
                    )
                }
            </div>
        </div>
    )
}

export default Pagination