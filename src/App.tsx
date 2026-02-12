import { useState } from 'react';
import LandingPage from './components/LandingPage';
import DemoPage from './components/DemoPage';
import ChatBot from './components/ChatBot';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'demo'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {currentPage === 'home' ? (
        <LandingPage onNavigateToDemo={() => setCurrentPage('demo')} />
      ) : (
        <DemoPage onNavigateToHome={() => setCurrentPage('home')} />
      )}
      <ChatBot />
    </div>
  );
}

export default App;
