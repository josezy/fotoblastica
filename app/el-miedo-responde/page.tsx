'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaSpotify, FaYoutube, FaApple, FaInstagram, FaMusic, FaMoon, FaSun } from 'react-icons/fa'
import { SiYoutubemusic } from 'react-icons/si'

interface LinkItem {
  platform: string
  url: string
  icon: React.ReactNode
  buttonText: string
}

export default function ElMiedoResponde() {
  const [isDark, setIsDark] = useState(true)
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links: LinkItem[] = [
    {
      platform: 'Spotify',
      url: 'https://open.spotify.com/track/4gdKT0dZLNyLxm1HB3Mdfm',
      icon: <FaSpotify className="w-6 h-6" />,
      buttonText: 'Play'
    },
    {
      platform: 'YouTube',
      url: 'https://www.youtube.com/watch?v=th7f_QwdwuU',
      icon: <FaYoutube className="w-6 h-6" />,
      buttonText: 'Watch'
    },
    {
      platform: 'YouTube Music',
      url: 'https://music.youtube.com/watch?v=th7f_QwdwuU',
      icon: <SiYoutubemusic className="w-6 h-6" />,
      buttonText: 'Play'
    },
    {
      platform: 'Deezer',
      url: 'https://www.deezer.com/us/album/834236692',
      icon: <FaMusic className="w-6 h-6" />,
      buttonText: 'Listen'
    },
    {
      platform: 'Apple Music',
      url: 'https://music.apple.com/co/album/el-miedo-responde/1844819070?i=1844819075',
      icon: <FaApple className="w-6 h-6" />,
      buttonText: 'Play'
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/fotoblastica_negativa',
      icon: <FaInstagram className="w-6 h-6" />,
      buttonText: 'Follow'
    }
  ]

  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          isDark
            ? 'bg-white/10 text-white hover:bg-white/20'
            : 'bg-black/10 text-black hover:bg-black/20'
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
      </button>

      {/* Blurred Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cover.png"
          alt="Background"
          fill
          className={`object-cover blur-3xl transition-opacity duration-500 ${
            isDark ? 'opacity-30' : 'opacity-20'
          }`}
          priority
        />
        <div className={`absolute inset-0 transition-colors duration-500 ${
          isDark ? 'bg-black/60' : 'bg-white/40'
        }`} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="flex flex-col items-center space-y-6">
          {/* Cover Image */}
          <div className={`relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
            isDark ? 'ring-2 ring-white/20' : 'ring-2 ring-black/20'
          }`}>
            <Image
              src="/cover.png"
              alt="El Miedo Responde Cover"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title and Artist */}
          <div className="text-center space-y-2">
            <h1 className={`text-3xl font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              El Miedo Responde
            </h1>
            <p className={`text-lg transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              by Fotoblástica Negativa
            </p>
          </div>

          {/* Copy Link Button */}
          <div className="relative">
            <button
              onClick={handleCopyLink}
              className={`px-8 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${
                copied
                  ? isDark
                    ? 'bg-green-500 border-green-500 text-white scale-95'
                    : 'bg-green-500 border-green-500 text-white scale-95'
                  : isDark
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              {copied ? '✓ COPIED!' : 'COPY LINK'}
            </button>
          </div>

          {/* Platform Links */}
          <div className="w-full space-y-3 pt-4">
            {links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between w-full py-4 px-6 rounded-full backdrop-blur-sm transition-all duration-300 group ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20 border border-white/20'
                    : 'bg-black/5 hover:bg-black/10 border border-black/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group-hover:scale-110 ${
                    isDark ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
                  }`}>
                    {link.icon}
                  </div>
                  <span className={`font-semibold text-lg transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    {link.platform}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`font-medium transition-colors duration-300 ${
                    isDark ? 'text-white/80' : 'text-black/70'
                  }`}>
                    {link.buttonText}
                  </span>
                  <svg
                    className={`w-5 h-5 group-hover:translate-x-1 transition-all duration-300 ${
                      isDark ? 'text-white/80' : 'text-black/70'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
