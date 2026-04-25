import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png'
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='my-10 flex flex-col justify-center items-center space-y-2'>
            <Image
            src={Logo}
            width={300}
            height={200}
            alt='Logo'
            className='mx-auto'
            />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(2014, 1, 11), "yyyy-MM-dd")}</p>
        </div>
    );
};

export default Header;