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
    <div className="flex flex-col h-screen w-full">
      <header className="bg-purple-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Social Sim</h1>
      </header>
      <main className="flex-grow flex">
        <nav className="w-16 bg-purple-800 text-white">
          <ul className="flex flex-col items-center py-4 space-y-6">
            <li onClick={() => setCurrentPage('home')}><Home size={24} className="cursor-pointer hover:text-purple-300" /></li>
            <li onClick={() => setCurrentPage('friends')}><Users size={24} className="cursor-pointer hover:text-purple-300" /></li>
            <li onClick={() => setCurrentPage('map')}><Map size={24} className="cursor-pointer hover:text-purple-300" /></li>
            <li onClick={() => setCurrentPage('profile')}><User size={24} className="cursor-pointer hover:text-purple-300" /></li>
          </ul>
        </nav>
        <div className="flex-grow p-4 overflow-auto bg-purple-100">
          {renderPage()}
        </div>
      </main>
      <footer className="bg-purple-200 p-2 text-center text-purple-800">
        <p>&copy; 2024 Social Sim App</p>
      </footer>
    </div>
  )
}

export default App