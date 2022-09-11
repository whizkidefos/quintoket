import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';

import CreatorCard from './CreatorCard';
import images from '../assets';
import { makeId } from '../utils/makeId';
import Image from 'next/image';

const TopSellers = () => {
    const { theme } = useTheme();
    const parentRef = useRef(null);
    const scrollRef = useRef(null);
    const [hideButtons, setHideButtons] = useState(false);

    const handleScroll = (direction) => {
        const { current } = scrollRef;

        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

        if (direction === 'left') {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    }

    const isScrollable = () => {
        const { current } = scrollRef;
        const { current: parent } = parentRef;

        if (current?.scrollWidth >= parent?.offsetWidth) {
            setHideButtons(false);
        } else {
            setHideButtons(true);
        }
    }

    useEffect(() => {
        isScrollable();
        window.addEventListener('resize', isScrollable);

        return () => {
            window.removeEventListener('resize', isScrollable);
        }
    });

    return (
        <article>
            <h2 className="ml-4 text-2xl font-semibold font-poppins dark:text-white text-nft-black-1 minlg:text-4xl xs:ml-0">Best Creators</h2>

            <div className="relative flex flex-1 max-w-full mt-3" ref={parentRef}>
                <div className="flex flex-row overflow-x-scroll select-none w-max no-scrollbar" ref={scrollRef}>
                    {[6, 7, 8, 9, 10].map((i) => (
                        <CreatorCard
                            key={`creator-${i}`}
                            rank={i}
                            creatorImage={images[`creator${i}`]}
                            creatorName={`0x${makeId(3)}...${makeId(4)}`}
                            creatorEths={10 - i * 0.5}
                        />
                    ))}
                </div>

                {!hideButtons && (
                    <>
                        <div onClick={() => handleScroll('left')} className='absolute left-0 w-8 h-8 cursor-pointer minlg:h-12 minlg:w-12 top-45'>
                            <Image
                                src={images.left}
                                layout='fill'
                                objectFit='contain'
                                alt='left-arrow'
                                className={theme === 'light' && 'filter invert'}
                            />
                        </div>
                        <div onClick={() => handleScroll('right')} className='absolute right-0 w-8 h-8 cursor-pointer minlg:h-12 minlg:w-12 top-45'>
                            <Image
                                src={images.right}
                                layout='fill'
                                objectFit='contain'
                                alt='right-arrow'
                                className={theme === 'light' && 'filter invert'}
                            />
                        </div>
                    </>
                )}

            </div>
        </article>
    )
}

export default TopSellers;