import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies) return null;

    const scrollContainerRef = useRef(null);

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 500; // Adjust the value as needed
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 500; // Adjust the value as needed
        }
    };

    return (
        <div className='flex-col relative px-10 group'>
            <h1 
                onClick={handleScrollLeft}
                className='text-3xl font-bold absolute left-10 top-32 text-white hidden  cursor-pointer select-none group-hover:block hover:scale-150'>
         <i className="fa-solid fa-chevron-left"></i>
            </h1>
            <h1 
                onClick={handleScrollRight}
                className='text-3xl font-bold absolute right-10 top-32 text-white hidden  cursor-pointer select-none group-hover:block hover:scale-150'>
                       <i className="fa-solid fa-chevron-right"></i>
            </h1>
            <h1 className='text-2xl font-semibold mt-12 mb-3'>{title}</h1>
            <div 
                className='flex overflow-x-scroll no-scrollbar scroll-smooth ">' 
                ref={scrollContainerRef}>
                {movies.map((data, idx) => (
                    <div key={idx} className='mr-2  rounded-md'>
                        <MovieCard poster={data.poster_path} />
                    </div>
                ))}
            </div>
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;  /* Internet Explorer 10+ */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </div>
    );
};

export default MovieList;
