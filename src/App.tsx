import React from 'react'
import { Users, Map, User, Home, LogOut } from 'lucide-react'
import './App.css'
import { AuthProvider, useAuth } from './AuthProvider'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import FriendsList from './components/FriendsList'
import NPCMap from './components/NPCMap'
import ProfilePage from './components/ProfilePage'

function AppContent() {
  const [currentPage, setCurrentPage] = React.useState('home')
  const { user, login, logout } = useAuth();

  if (!user) {
    return <LoginPage onLogin={login} />;
  }

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
      <header className="bg-blue-600 text-white p-4 text-center rounded-b-3xl shadow-lg relative">
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>NPCfriends</h1>
        <button 
          onClick={logout}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-full flex items-center transition duration-300"
        >
          <LogOut size={16} className="mr-1" />
          Logout
        </button>
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

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App