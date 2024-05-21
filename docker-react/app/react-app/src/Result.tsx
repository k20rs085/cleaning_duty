import React, { useState, useEffect } from 'react';
import './Result.css'
import img from './img/result_image.jpg';

export interface ResultProps {
    name: string;
}

const Result: React.FC<ResultProps> = ({ name }) => {
    // const [ isVisible, setIsVisible ] = useState(true);
    const disp = name.trim() !== '';

    return (
        <div>
            {disp && <img src={img}
            className='result_image'
            alt='logo'
            />}
            <div className='user'>{name}</div>
        </div>
    )
}

export default Result
