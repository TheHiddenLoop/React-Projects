import React from 'react'
import { ShortUrl } from './components/ShortUrl'
import { Urls } from './components/Urls'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-6">URL Shortener</h1>
        <ShortUrl />
        <Urls />
      </div>
    </div>
  )
}
