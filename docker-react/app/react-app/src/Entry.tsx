import React, { useState, useEffect } from 'react';
import userListData from './data/user.json'; // データをインポート
import './Entry.css';

interface User {
  id: number;
  name: string;
}

function Entry() {
    //aiueo
  return (
    <div>
        <input type="number" className="StNum" />
        <input type='text' className='StName' />
        <button className='entry'>entry</button>
    </div>
  );
}

export default Entry;
