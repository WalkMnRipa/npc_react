import { Map } from 'lucide-react'

const NPCMap = () => (
  <div className="bg-white shadow-md rounded-lg p-6 w-full h-full">
    <h2 className="text-2xl font-bold mb-4 text-purple-800">Virtual World Map</h2>
    <div className="relative w-full h-[calc(100%-6rem)] bg-purple-100 rounded-lg overflow-hidden">
      <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">
        <Map className="text-purple-500" />
      </div>
      {/* Example location markers */}
      <div className="absolute top-1/4 left-1/3 bg-white p-2 rounded-full shadow">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 bg-white p-2 rounded-full shadow">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>
    </div>
    <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300">
      Explore New Location
    </button>
  </div>
)

export default NPCMap