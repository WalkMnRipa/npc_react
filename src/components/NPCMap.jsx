import React, { useState } from 'react';
import { Map, Coffee, Trees, Building, Users, X, Book, ShoppingBag, Utensils, Dumbbell } from 'lucide-react';

const NPCMap = () => {
  const [selectedNPC, setSelectedNPC] = useState(null);

  const zones = [
    { id: 1, name: 'Coffee Shop', icon: Coffee, color: 'bg-amber-200', top: '20%', left: '40%' },
    { id: 2, name: 'Park', icon: Trees, color: 'bg-emerald-200', top: '40%', left: '20%' },
    { id: 3, name: 'Office Building', icon: Building, color: 'bg-sky-200', top: '60%', left: '70%' },
    { id: 4, name: 'Community Center', icon: Users, color: 'bg-purple-200', top: '30%', left: '80%' },
    { id: 5, name: 'Library', icon: Book, color: 'bg-indigo-200', top: '50%', left: '60%' },
    { id: 6, name: 'Shopping Mall', icon: ShoppingBag, color: 'bg-pink-200', top: '70%', left: '30%' },
    { id: 7, name: 'Restaurant', icon: Utensils, color: 'bg-red-200', top: '10%', left: '60%' },
    { id: 8, name: 'Gym', icon: Dumbbell, color: 'bg-orange-200', top: '80%', left: '50%' },
  ];

  const npcs = [
    { id: 1, name: 'Alice', location: 'Coffee Shop', color: 'bg-blue-400', top: '23%', left: '43%', bio: 'Coffee enthusiast and aspiring writer.' },
    { id: 2, name: 'Bob', location: 'Coffee Shop', color: 'bg-green-400', top: '25%', left: '45%', bio: 'Software developer who works remotely from cafes.' },
    { id: 3, name: 'Charlie', location: 'Office Building', color: 'bg-yellow-400', top: '65%', left: '75%', bio: 'Workaholic software developer.' },
    { id: 4, name: 'Diana', location: 'Library', color: 'bg-purple-400', top: '55%', left: '65%', bio: 'Bookworm and history buff.' },
    { id: 5, name: 'Ethan', location: 'Shopping Mall', color: 'bg-red-400', top: '75%', left: '35%', bio: 'Fashion enthusiast and personal shopper.' },
    { id: 6, name: 'Fiona', location: 'Restaurant', color: 'bg-indigo-400', top: '13%', left: '63%', bio: 'Food critic and culinary adventurer.' },
    { id: 7, name: 'George', location: 'Restaurant', color: 'bg-orange-400', top: '15%', left: '65%', bio: 'Fitness trainer having lunch after a workout.' },
    { id: 8, name: 'Hannah', location: 'Park', color: 'bg-teal-400', top: '43%', left: '23%', bio: 'Environmental scientist studying urban ecosystems.' },
    { id: 9, name: 'Ian', location: 'Park', color: 'bg-lime-400', top: '45%', left: '25%', bio: 'Professional dog walker and animal lover.' },
    { id: 10, name: 'Julia', location: 'Gym', color: 'bg-rose-400', top: '83%', left: '53%', bio: 'Olympic weightlifter in training.' },
  ];

  const handleNPCClick = (npc) => {
    setSelectedNPC(npc);
  };

  const closeProfile = () => {
    setSelectedNPC(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Virtual World Map</h2>
      <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
        <div className="absolute top-2 left-2 bg-white p-1 rounded shadow">
          <Map className="text-gray-500" size={20} />
        </div>
        {zones.map((zone) => (
          <div 
            key={zone.id} 
            className={`absolute ${zone.color} p-2 rounded-lg shadow-sm`} 
            style={{ top: zone.top, left: zone.left }}
            title={zone.name}
          >
            <zone.icon className="text-gray-600" size={20} />
          </div>
        ))}
        {npcs.map((npc) => (
          <div 
            key={npc.id} 
            className={`absolute ${npc.color} p-1 rounded-full shadow-sm cursor-pointer transition-transform hover:scale-110 hover:z-10`}
            style={{ top: npc.top, left: npc.left }}
            title={`${npc.name} (${npc.location})`}
            onClick={() => handleNPCClick(npc)}
          >
            <Users className="text-white" size={16} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Explore
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
          Start Event
        </button>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Nearby NPCs</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {npcs.map((npc) => (
            <div key={npc.id} className="flex items-center" title={npc.location}>
              <div className={`w-6 h-6 ${npc.color} rounded-full mr-2 flex items-center justify-center flex-shrink-0`}>
                <Users className="text-white" size={12} />
              </div>
              <span className="truncate text-sm">{npc.name}</span>
            </div>
          ))}
        </div>
      </div>
      {selectedNPC && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedNPC.name}</h3>
              <button onClick={closeProfile} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <p className="mb-2"><strong>Location:</strong> {selectedNPC.location}</p>
            <p><strong>Bio:</strong> {selectedNPC.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NPCMap;