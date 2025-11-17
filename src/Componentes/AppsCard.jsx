import React from 'react';

const AppsCard = ({ app }) => {
    const {image, title, downloads, ratingAvg } = app;

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='p-4 bg-white rounded-md h-[380px] shadow-lg hover:scale-105 transition ease-in-out'>
                <div className='h-[250px] w-full mx-auto pt-5'>
                <img src={image} alt="" className='w-52 h-48 mx-auto'/>
                </div>
                <h2 className='text-[#001931] font-inter font-medium text-xl py-4'>{ title }</h2>
                <div className='flex items-center justify-between font-inter font-medium'>
                    <a href="" className='flex items-center space-x-2 text-[#00D390] bg-[#F1F5E8] py-1.5 px-2.5 rounded-sm'>
                        <img src="/assets/icon-downloads.png" alt=""  className='w-4 h-4'/> <span>{downloads}</span>
                    </a>
                    <a href="" className='flex items-center space-x-2 text-[#FF8811]  bg-[#FFF0E1] py-1.5 px-2.5 rounded-sm'>
                        <img src="/assets/icon-ratings.png" alt="" className='w-4 h-4' /> <span>{ratingAvg}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AppsCard;