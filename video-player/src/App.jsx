import {
  Maximize2,
  Minimize,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react"
import video from "./assets/video.mp4"
import { useEffect, useRef, useState } from "react"

export default function App() {
  const [isPlay, setIsPlay] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMaximize, setIsMaximize] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)

  const videoRef = useRef(null)
  const containerRef = useRef(null)

  const handlePlay = () => {
    videoRef.current.play()
    setIsPlay(true)
  }

  const handlePause = () => {
    videoRef.current.pause()
    setIsPlay(false)
  }

  const handleTime = () => {
    const current = videoRef.current.currentTime
    const duration = videoRef.current.duration
    setProgress((current / duration) * 100)
  }

  const handleSeek = (e) => {
    const bar = e.currentTarget
    const clickX = e.nativeEvent.offsetX
    const barWidth = bar.clientWidth
    const percent = (clickX / barWidth) * 100
    const duration = videoRef.current.duration
    videoRef.current.currentTime = (percent / 100) * duration
    setProgress(percent)
  }

  const handleMaximize = () => {
    containerRef.current.requestFullscreen()
    setIsMaximize(true)
  }

  const handleMinimize = () => {
    document.exitFullscreen()
    setIsMaximize(false)
  }

  const handleVolumeChange = (e) => {
    const value = e.target.value
    videoRef.current.volume = value
    setVolume(value)
    setIsMuted(value === "0")
  }

  const toggleMute = () => {
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  useEffect(() => {
    const handleKey = (e) => {
      switch (e.code) {
        case "Space":
          e.preventDefault()
          isPlay ? handlePause() : handlePlay()
          break
        case "ArrowRight":
          videoRef.current.currentTime += 5
          break
        case "ArrowLeft":
          videoRef.current.currentTime -= 5
          break
        case "ArrowUp":
          videoRef.current.volume = Math.min(videoRef.current.volume + 0.1, 1)
          setVolume(videoRef.current.volume)
          break
        case "ArrowDown":
          videoRef.current.volume = Math.max(videoRef.current.volume - 0.1, 0)
          setVolume(videoRef.current.volume)
          break
        default:
          break
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isPlay])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div ref={containerRef} className="relative w-[70%] max-w-4xl group">
        <video
          onTimeUpdate={handleTime}
          ref={videoRef}
          controls={false}
          className="w-full rounded-xl shadow-lg border border-gray-500"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-4 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-t from-black/70 to-transparent text-white">
            <div className="flex space-x-4 items-center">
              {isPlay ? (
                <Pause
                  onClick={handlePause}
                  className="cursor-pointer hover:text-red-400 transition"
                  size={24}
                />
              ) : (
                <Play
                  onClick={handlePlay}
                  className="cursor-pointer hover:text-green-400 transition"
                  size={24}
                />
              )}

              {isMuted ? (
                <VolumeX
                  onClick={toggleMute}
                  className="cursor-pointer hover:text-blue-400 transition"
                  size={22}
                />
              ) : (
                <Volume2
                  onClick={toggleMute}
                  className="cursor-pointer hover:text-blue-400 transition"
                  size={22}
                />
              )}
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-24 accent-red-600 cursor-pointer"
              />
            </div>

            <div>
              {isMaximize ? (
                <Minimize
                  onClick={handleMinimize}
                  className="cursor-pointer hover:text-yellow-400 transition"
                  size={22}
                />
              ) : (
                <Maximize2
                  onClick={handleMaximize}
                  className="cursor-pointer hover:text-yellow-400 transition"
                  size={22}
                />
              )}
            </div>
          </div>

          <div
            className="h-2 bg-gray-700 cursor-pointer px-[2px]"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-red-600 rounded-l-sm  rounded-r-lg"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
