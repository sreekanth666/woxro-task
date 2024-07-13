import Image from 'next/image';
import React, { FC } from 'react';

interface CardProps {

}

const Card: FC<CardProps> = ({ }) => {
    return (
        <div>
            <Image
                src='/images/card/screenshot-1.webp'
                alt='Epic Games Fortnite game image'
                width={800}
                height={800}
            />
            <p className='text-center font-roboto font-light leading-tight mt-4 md:mt-6'>
                Explore large, destructible environments where no two games are ever the same.
            </p>
        </div>
    );
};

export default Card;