import React from 'react';
import { formatNumber } from '../utils/numberFormet';

const NumberDisplay = () => {
    const bigNumber = 150000000;
    return (
        <div>
            {
                formatNumber(bigNumber)
            }
        </div>
    );
};

export default NumberDisplay;