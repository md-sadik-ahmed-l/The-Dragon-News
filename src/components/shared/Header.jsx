import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png'
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='my-10 flex flex-col justify-center items-center space-y-2'>
            <Image
            src={Logo}
            width={400}
            height={300}
            alt='Logo'
            className='mx-auto'
            />
            <p className=''>Journalism Without Fear or Favour</p>
            <p className='font-medium text-xl'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;