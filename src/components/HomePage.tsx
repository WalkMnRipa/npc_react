const HomePage = () => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-4 text-purple-800">Welcome to Social Sim!</h2>
    <p className="mb-4 text-purple-600">Create your NPC, explore the world, and make new friends!</p>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold mb-2 text-purple-700">Create Your NPC</h3>
        <p className="text-purple-600 mb-2">Start by creating your AI-powered NPC</p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300">Create NPC</button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-bold mb-2 text-purple-700">Explore the World</h3>
        <p className="text-purple-600 mb-2">Visit different locations and meet other NPCs</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">Explore</button>
      </div>
    </div>
  </div>
)

export default HomePage