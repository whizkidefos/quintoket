import React from 'react';
import Image from 'next/image';

import images from '../assets';

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => {
    return (
        <article className='flex flex-col p-4 m-4 bg-white border min-w-190 minlg:min-w-240 dark:bg-nft-black-3 dark:border-nft-black-3 border-nft-gray-1 rounded-3xl'>
            <div className='w-8 h-8 rounded-full bg-nft-red-violet flexCenter minlg:w-10 minlg:h-10'>
                <p className='text-base font-semibold text-white font-poppins minlg:text-lg'>{rank}</p>
            </div>

            <div className='flex justify-center my-2'>
                <figure className='relative w-20 h-20 minlg:w-28 minlg:h-28'>
                    <Image
                        src={creatorImage}
                        layout='fill'
                        objectFit='cover'
                        alt={creatorName}
                        className='rounded-full'
                    />
                    <div className='absolute w-4 h-4 minlg:w-7 minlg:h-7 bottom-2 -right-0'>
                        <Image
                            src={images.tick}
                            layout='fill'
                            objectFit='contain'
                            alt='tick'
                        />
                    </div>
                </figure>
            </div>

            <div className='flex-col mt-3 text-center minlg:mt-7 flexCenter'>
                <p className='text-base font-semibold font-poppins dark:text-white text-nft-black-1'>{creatorName}</p>
                <p className='mt-1 text-base font-semibold font-poppins dark:text-white text-nft-black-1'>{creatorEths.toFixed(2)} <span className='font-normal'>ETH</span></p>
            </div>

        </article>
    )
}

export default CreatorCard;