import React from 'react';
import { useState } from 'react';

// Main App component
function App() {
  const [activeTab, setActiveTab] = useState('home'); // State for active bottom navigation tab

  // Data for the dashboard cards
  const cardData = [
    {
      id: 'prevention',
      title: 'Prevention tools',
      description: 'Stay safe before danger strikes. Use AI to stop misuse before it starts',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rose-500">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.488 0 2.904.542 3.997 1.549L21.427 15H2.573L8.603 3.799ZM12 18.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
        </svg>
      ), // Checkmark icon
      bgColor: 'bg-rose-100', // Light rose background
      borderColor: 'border-rose-200', // Rose border
    },
    {
      id: 'report',
      title: 'Report',
      description: 'Report violations and take down abusive content with one click—securely and fast.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-sky-500">
          <path d="M12 2.25a.75.75 0 0 0-1.079.02l-3.182 3.433-3.182-3.433A.75.75 0 0 0 3.75 2.25H12Zm-.625 15.679a.75.75 0 0 0 1.25 0l3.056-5.5a.75.75 0 0 0-.895-1.125l-2.023.238L9.73 9.47l-2.023-.238a.75.75 0 0 0-.895 1.125l3.056 5.5ZM12 2.25a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z" />
        </svg>
      ), // Paper plane icon
      bgColor: 'bg-blue-100', // Light blue background
      borderColor: 'border-blue-200', // Blue border
    },
    {
      id: 'scan-detect',
      title: 'Scan & Detect',
      description: 'Scan, analyze, and uncover any misuse of your images or videos—automatically.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-purple-500">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.694 4.693a.75.75 0 0 1-1.06 1.06l-4.693-4.694A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
        </svg>
      ), // Magnifying glass with leaf icon
      bgColor: 'bg-purple-100', // Light purple background
      borderColor: 'border-purple-200', // Purple border
    },
    {
      id: 'emotional-support',
      title: 'Emotional Support',
      description: 'Legal aid, mental health, and secure evidence handling—all in one place.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rose-500">
          <path d="M7.493 18.062c1.233.155 2.484.238 3.75.238 2.762 0 5.205-.785 7.426-2.316A3.376 3.376 0 0 0 21.75 12c0-.783-.198-1.543-.574-2.217-.638-1.128-2.031-1.93-3.567-2.146A42.176 42.176 0 0 0 12 7.5c-2.08 0-4.047.165-5.918.47C4.657 8.261 3 9.482 3 12c0 2.21 1.488 3.996 3.566 4.793.844.314 1.738.52 2.673.619.068.795.293 1.536.643 2.19Z" />
        </svg>
      ), // Heart hands icon
      bgColor: 'bg-rose-100', // Light rose background
      borderColor: 'border-rose-200', // Rose border
    },
    // Placeholder cards for the remaining 4 slots
    { id: 'placeholder-1', title: '', description: '', icon: null, bgColor: 'bg-purple-100', borderColor: 'border-purple-200' },
    { id: 'placeholder-2', title: '', description: '', icon: null, bgColor: 'bg-rose-100', borderColor: 'border-rose-200' },
    { id: 'placeholder-3', title: '', description: '', icon: null, bgColor: 'bg-purple-100', borderColor: 'border-purple-200' },
    { id: 'placeholder-4', title: '', description: '', icon: null, bgColor: 'bg-rose-100', borderColor: 'border-rose-200' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full max-w-md flex justify-between items-center p-4 bg-white shadow-sm rounded-b-xl">
        <div className="flex items-center space-x-2">
          {/* Updated Vanta AI text with specified typography */}
          <span className="font-['Playfair_Display'] font-semibold text-[40px] leading-none text-indigo-800">Vanta AI</span>
          {/* Butterfly Icon (simple SVG for demonstration) */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-pink-400"
          >
            <path
              d="M12 2C9.8 2 8 3.8 8 6C8 7.8 9.2 9.3 11 9.8V12H9C7.9 12 7 12.9 7 14V16C7 17.1 7.9 18 9 18H11V20C11 21.1 11.9 22 13 22H15C16.1 22 17 21.1 17 20V18H19C20.1 18 21 17.1 21 16V14C21 12.9 20.1 12 19 12H17V9.8C18.8 9.3 20 7.8 20 6C20 3.8 18.2 2 16 2C13.8 2 12 3.8 12 6V2ZM12 4C12.7 4 13.3 4.6 13.3 5.3C13.3 6 12.7 6.7 12 6.7C11.3 6.7 10.7 6 10.7 5.3C10.7 4.6 11.3 4 12 4Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-indigo-800 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 0 0 2.572-1.065Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className="text-xs mt-1">Settings</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-indigo-800 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </div>
        </div>
      </header>

      {/* Main Content Area - Grid of Cards */}
      <main className="flex-grow w-full max-w-md p-4 grid grid-cols-2 gap-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 ${card.bgColor} ${card.borderColor} bg-opacity-70}
            style={{ backdropFilter: 'blur(5px)' }} // Mimic frosted glass
          >
            {card.icon}
            <h3 className="text-lg font-semibold text-gray-800 text-center mt-2">{card.title}</h3>
            <p className="text-sm text-gray-600 text-center mt-1">{card.description}</p>
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="w-full max-w-md bg-white shadow-lg rounded-t-xl py-2 flex justify-around items-center fixed bottom-0 z-10">
        {[
          { name: 'Home', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-4.5 9V9.75a2.25 2.25 0 0 0-2.25-2.25H15M12 18.75h.008v.008H12V18.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM12 15.75h.008v.008H12V15.75Z" />
            </svg>
          ) },
          { name: 'Prevention', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.012-.061 2.023-.174 3.023l-3.352-3.352c-.675-.675-.411-1.802.668-2.316l2.977-1.488a.6.6 0 0 0 .33-.531V7.5C21 5.018 18.982 3 16.5 3H7.5C5.018 3 3 5.018 3 7.5v.75c0 .12-.023.238-.06.353l3.352 3.352c1.079.516 1.343 1.643.668 2.316L3.174 15.023A19.531 19.531 0 0 0 3 12c0-3.042 1.152-5.746 3-7.876V4.5a.75.75 0 0 1 .75-.75h3.106a3 3 0 0 1 2.64-1.668 3 3 0 0 1 2.64 1.668h3.105a.75.75 0 0 1 .75.75v.624C19.848 6.254 21 8.959 21 12Z" />
            </svg>
          ) },
          { name: 'Detection', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          ) },
          { name: 'Reporting', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3V10.5M6A7.5 7.5 0 0 1 3 15.75v-1.5" />
            </svg>
          ) },
          { name: 'Support', icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712L12 15l-2.121-2.121c-1.172-1.025-1.172-2.687 0-3.712Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-5.621 4.379-10 10-10 5.621 0 10 4.379 10 10s-4.379 10-10 10c-5.621 0-10-4.379-10-10Z" />
            </svg>
          ) },
        ].map((item) => (
          <div
            key={item.name}
            className={flex flex-col items-center cursor-pointer transition-colors duration-200 ${
              activeTab === item.name.toLowerCase() ? 'text-indigo-800' : 'text-gray-500 hover:text-indigo-600'
            }}
            onClick={() => setActiveTab(item.name.toLowerCase())}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default App;