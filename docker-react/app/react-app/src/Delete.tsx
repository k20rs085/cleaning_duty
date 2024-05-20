import React, { useState, useEffect } from 'react';
import './Delete.css'
import { User } from './UserList';

interface DeleteProps {
  handleValueChange: (newValue: User[]) => void;
  id: number;
}

const Delete: React.FC<DeleteProps> = ({ handleValueChange, id }) => {

  const buttonClick = (userId: number) => {
    // 確認ウィンドウがあれば良いよね

    // POSTリクエスト 設定
    const requestOption = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userId })
    };

    // 送信 & 受信
    fetch("http://127.0.0.1:3001/api/v1/delete", requestOption)
      .then((res) => res.json())
      .then((json) => handleValueChange(json)) // 親の値を変更
      .catch(() => alert("error"));
  };

  return (
    <button className='delete' onClick={() => buttonClick(id)}>delete</button>
  );
};

export default Delete;
