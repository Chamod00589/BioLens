import { useState } from 'react'
import { CameraIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('capture')

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5 px-2">
          <a
            href="#"
            className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md ${
              activeTab === 'capture' ? 'text-indigo-600 bg-indigo-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('capture')}
          >
            <CameraIcon className="mr-4 h-6 w-6" />
            Capture
          </a>
          <a
            href="#"
            className={`mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md ${
              activeTab === 'history' ? 'text-indigo-600 bg-indigo-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('history')}
          >
            <ClockIcon className="mr-4 h-6 w-6" />
            History
          </a>
          <a
            href="#"
            className={`mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md ${
              activeTab === 'profile' ? 'text-indigo-600 bg-indigo-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            <UserIcon className="mr-4 h-6 w-6" />
            Profile
          </a>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-5">
        {activeTab === 'capture' && <CaptureTab />}
        {activeTab === 'history' && <HistoryTab />}
        {activeTab === 'profile' && <ProfileTab />}
      </main>
    </div>
  )
}

function CaptureTab() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Image Capture</h2>
      <div className="bg-gray-200 w-full h-64 rounded-lg mb-4 flex items-center justify-center">
        Camera feed placeholder
      </div>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mr-2">Capture</button>
      <button className="bg-green-600 text-white px-4 py-2 rounded-md">Analyze</button>
    </div>
  )
}

function HistoryTab() {
  const analyses = [
    { id: 1, status: 'Contaminated', accuracy: 95, date: '2023-04-10' },
    { id: 2, status: 'Non-Contaminated', accuracy: 98, date: '2023-04-09' },
    { id: 3, status: 'Contaminated', accuracy: 92, date: '2023-04-08' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Analysis History</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {analyses.map((analysis) => (
          <div key={analysis.id} className="bg-white p-4 rounded-lg shadow">
            <div className="w-full h-32 bg-gray-200 rounded-md mb-2"></div>
            <p className="font-bold">{analysis.status}</p>
            <p>Accuracy: {analysis.accuracy}%</p>
            <p>Date: {analysis.date}</p>
            <button className="mt-2 text-indigo-600 hover:text-indigo-800">Download Report</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProfileTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
            Organization
          </label>
          <input
            type="text"
            name="organization"
            id="organization"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">
            Update Profile
          </button>
        </div>
      </form>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">Change Password</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              name="current-password"
              id="current-password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              name="new-password"
              id="new-password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md">
              Change Password
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <button className="text-red-600 hover:text-red-800">Delete Account</button>
      </div>
    </div>
  )
}
