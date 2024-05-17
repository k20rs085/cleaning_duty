import React from 'react'
import './Heading.css';

const Heading = (props: {content: string}) => {
    const { content } = props;

    return (
        <div className='head'> {content} </div>
    )
}

export default Heading
