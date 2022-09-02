import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    console.log({ theme })
    return (
        <nav className='fixed z-10 flex-row w-full p-4 bg-white border-b flexBetween dark:bg-nft-dark dark:border-nft-gray-1 border-nft-gray-1'>
            <div className='flex flex-row justify-start flex-1'>
                <Link href='/'>
                    <div className='flex cursor-pointer flexCenter md:hidden' onClick={() => { }}>
                        <Image src={images.logo02} objectFit='contain' width={32} alt='logo' />
                        <p className='ml-1 text-lg font-semibold dark:text-white text-nft-black-1'>QuintoKet</p>
                    </div>
                </Link>
                <Link href='/'>
                    <div className='hidden md:flex' onClick={() => { }}>
                        <Image src={images.logo02} objectFit='contain' width={32} alt='logo' />
                    </div>
                </Link>
            </div>
            <div className='flex flex-row justify-end flex-initial'>
                <div className='flex items-center mr-2'>
                    <input type='checkbox' className='checkbox' id='checkbox' onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                    <label htmlFor='checkbox' className='relative w-8 h-4 p-1 bg-black flexBetween rounded-2xl label'>
                        <i className='fas fa-sun' />
                        <i className='fas fa-moon' />
                        <div className='absolute w-3 h-3 bg-white rounded-full ball' />
                    </label>
                </div>
            </div>
            <div className='flex md:hidden'>
                MenuItems
            </div>
        </nav>
    )
}

export default Navbar;