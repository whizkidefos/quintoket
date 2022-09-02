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
        <nav className='fixed z-10 flex-row w-full p-4 bg-white border-b flexBetween dark:bg-nft-dark dark:border-nft-gray-1 border-nft-gray-1'>Navbar</nav>
    )
}

export default Navbar;