import React from 'react';

const AppsAllDetails = () => {
    const { apps, loading } = useProducts();
    const { image } = apps;
    const { image } = apps;
    const { image } = apps;
    return (
        <div>
            <div className='flex items-center gap-x-40'>
                <div>
                    <img src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default AppsAllDetails;