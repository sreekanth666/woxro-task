import React, { FC } from 'react';

interface StaticCardProps {
    title: string;
    description: string;
}

const StaticCard: FC<StaticCardProps> = ({ title, description }) => {
    return (
        <div className='font-roboto flex flex-col items-center mt-14 md:mt-20'>
            <p className='font-extralight text-5xl lg:text-6xl'>
                {title}
            </p>
            <p className='font-light w-[47%] md:w-[67%] leading-tight text-base lg:text-lg mt-4'>
                {description}
            </p>
        </div>
    );
};

export default StaticCard;