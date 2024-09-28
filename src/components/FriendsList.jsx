import React from 'react';
import { MessageCircle } from 'lucide-react';

const FriendsList = () => {
  const friends = [
    { id: 1, name: 'Alice Johnson', status: 'online' },
    { id: 2, name: 'Bob Smith', status: 'offline' },
    { id: 3, name: 'Charlie Brown', status: 'online' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Friends</h2>
      <ul className="space-y-4">
        {friends.map((friend) => (
          <li key={friend.id} className="flex items-center justify-between bg-purple-100 p-3 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-300 rounded-full mr-3"></div>
              <div>
                <h3 className="font-semibold text-purple-800">{friend.name}</h3>
                <p className="text-sm text-purple-600">{friend.status}</p>
              </div>
            </div>
            <button className="p-2 bg-purple-200 rounded-full text-purple-600 hover:bg-purple-300">
              <MessageCircle size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;