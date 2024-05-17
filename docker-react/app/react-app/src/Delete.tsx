import React, { useState, useEffect } from 'react';
import './Delete.css'

interface DeleteProps {
  id: number;
}

const Delete: React.FC<DeleteProps> = ({ id }) => {
  const buttonClick = (userId: number) => {
    console.log(userId);
  };

  return (
    <button className='delete' onClick={() => buttonClick(id)}>delete</button>
  );
};

export default Delete;
