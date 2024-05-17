import React, { useState, useEffect } from 'react';
import userListData from './data/user.json'; // データをインポート
import './UserList.css'

import Delete from './Delete';

interface User {
  id: number;
  name: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  // コンポーネントがマウントされた時にデータを読み込む
  useEffect(() => {
    setUsers(userListData);
  }, []);

  const handleButtonClick = (userId: number) => {
    console.log(userId);
  };

  return (
    <div>
      <h1>Member</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className='data'>
            {Math.floor(user.id/1000)}KK{( '000' + (user.id%1000) ).slice( -3 )} - {user.name}
            <Delete id={user.id}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
