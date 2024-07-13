import Image from 'next/image';
import React, { FC } from 'react';

interface CardProps {
    image: string;
    alt: string;
    description: string;
}

const Card: FC<CardProps> = ({ image, alt, description }) => {
    return (
        <div>
            <Image
                src={image}
                alt={alt}
                width={800}
                height={800}
            />
            <p className='text-center font-roboto font-light leading-tight mt-4 md:mt-6'>
                {description}
            </p>
        </div>
    );
};

export default Card;