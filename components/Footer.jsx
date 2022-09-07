import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import { Button } from '.';

const FooterLinks = ({ heading, items }) => {
    return (
        <aside>
            <h3 className='mb-2 text-xl font-semibold font-poppins dark:text-white text-nft-black-1'>{heading}</h3>
            {items.map((item) => (
                <p className='my-1 text-base font-normal cursor-pointer font-poppins dark:text-white text-nft-black-1 dark:hover:text-nft-gray-1 hover:text-nft-black-1'>{item}</p>
            ))}
        </aside>
    )
}

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className='flex-col py-16 border-t flexCenter dark:border-nft-black-1 border-nft-gray-1 sm:py-8'>
            <div className='flex flex-row w-full px-16 mt-8 sm:px-4 md:w-4/5 md:flex-col'>
                <div className="flex-col flex-1 flexStart">
                    <div className="cursor-pointer flexCenter">
                        <Image src={images.logo02} objectFit='contain' width={32} alt='logo' />
                        <p className='ml-1 text-lg font-semibold dark:text-white text-nft-black-1'>QuintoKet</p>
                    </div>
                    <p className="ml-1 text-lg font-semibold font-poppins dark:text-white text-ft-black-1">Subscribe for updates</p>
                    <div className="mt-6 bg-white border rounded-md text-nft-black-2 flexBetween md:w-full minlg:w-557 w-357 dark:bg-nft-black-2 dark:border-nft-black-2 border-nft-gray-2">
                        <input type='email' placeholder='Enter your email' className='flex-1 w-full h-full px-4 text-xs bg-white rounded-md outline-none dark:bg-nft-black-2 dark:text-white text-ft-black-1 minlg:text-lg' />
                        <div className="flex-initial">
                            <Button btnName='Subscribe' classStyles='rounded-md' />
                        </div>
                    </div>
                </div>

                <div className="flex-wrap flex-1 ml-10 flexBetween md:ml-0 md:mt-8">
                    <FooterLinks heading='QuintoKet' items={['Explore', 'How it works', 'Contact us', 'Blog']} />
                    <FooterLinks heading='Useful Links' items={['Help center', 'Terms of service', 'Legal', 'Privacy Policy']} />
                </div>
            </div>
            <div className='w-full px-16 mt-5 border-t flexCenter dark:border-nft-black-1 border-nft-gray-1 sm:px-4'>
                <div className='flex-row w-full flexBetween minmd:w-4/5 sm:flex-col mt-7'>
                    <p className='text-base font-semibold font-poppins dark:text-white text-nft-black-1'>&copy; 2022 QuintoKet, Inc. All Rights Reserved.</p>
                    <div className='flex flex-row sm:mt-4'>
                        {[images.instagram, images.twitter, images.telegram, images.discord].map((image, index) => (
                            <div className='mx-2 cursor-pointer' key={index}>
                                <Image
                                    src={image}
                                    objectFit='contain'
                                    width={25}
                                    height={25}
                                    alt='social'
                                    className={theme === 'light' && 'filter invert'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;