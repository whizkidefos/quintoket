import React from 'react'

const Banner = ({ title, parentStyles, childStyles }) => {
    return (
        <article className={`relative w-full flex items-center z-0 overflow-hidden nft-gradient ${parentStyles}`}>
            <h1 className={`text-5xl font-bold font-poppins leading-70 ${childStyles}`}>{title}</h1>
            <div className='absolute w-48 h-48 rounded-full sm:w-32 sm:h-32 white-bg -z-5 -top-9 -left-14' />
            <div className='absolute rounded-full w-72 h-72 sm:w-56 sm:h-56 white-bg -z-5 -bottom-24 -right-14' />
        </article>
    )
}

export default Banner