import { useState } from 'react'
import { Users, Map, User, Home } from 'lucide-react'
import './App.css'
import HomePage from './components/HomePage'
import FriendsList from './components/FriendsList'
import NPCMap from './components/NPCMap'
import ProfilePage from './components/ProfilePage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'friends':
        return <FriendsList />
      case 'map':
        return <NPCMap />
      case 'profile':
        return <ProfilePage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>NPCfriends</h1>
      </header>
      <main className="flex-grow flex">
        <nav className="w-20 bg-white shadow-lg rounded-r-3xl m-2">
          <ul className="flex flex-col items-center py-6 space-y-8">
            <li onClick={() => setCurrentPage('home')}><Home size={28} className="cursor-pointer text-blue-500 hover:text-blue-700" /></li>
            <li onClick={() => setCurrentPage('friends')}><Users size={28} className="cursor-pointer text-blue-500 hover:text-blue-700" /></li>
            <li onClick={() => setCurrentPage('map')}><Map size={28} className="cursor-pointer text-blue-500 hover:text-blue-700" /></li>
            <li onClick={() => setCurrentPage('profile')}><User size={28} className="cursor-pointer text-blue-500 hover:text-blue-700" /></li>
          </ul>
        </nav>
        <div className="flex-grow p-4 overflow-auto">
          {renderPage()}
        </div>
      </main>
      <footer className="bg-white p-2 text-center text-blue-800 rounded-t-3xl shadow-lg">
        <p style={{ fontFamily: 'SF Pro Text, sans-serif' }}>&copy; 2024 NPCfriends</p>
      </footer>
    </div>
  )
}

export default App