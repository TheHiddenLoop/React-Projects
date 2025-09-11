import React, { useEffect, useState } from 'react'

export default function App() {
  const [eyePositions, setEyePositions] = useState({
    leftEye: { x: 0, y: 0 },
    rightEye: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const movePupil = (eyeId) => {
        const eye = document.getElementById(eyeId);
        if (!eye) return { x: 0, y: 0 };
        const rect = eye.getBoundingClientRect();
        const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        const angle = Math.atan2(e.clientY - center.y, e.clientX - center.x);
        const offset = 15; 
        return { x: Math.cos(angle) * offset, y: Math.sin(angle) * offset };
      };

      setEyePositions({
        leftEye: movePupil("left-eye"),
        rightEye: movePupil("right-eye"),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden font-sans'>
      <div className="flex space-x-12">
        <Eye id={"left-eye"} styles={{ transform: `translate(${eyePositions.leftEye.x}px, ${eyePositions.leftEye.y}px)` }}/>
        <Eye id={"right-eye"} styles={{ transform: `translate(${eyePositions.rightEye.x}px, ${eyePositions.rightEye.y}px)` }}/>
      </div>
    </div>
  )
}

function Eye({styles, id}) {
  return <div id={id} className="w-48 h-48 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center relative shadow-lg">
    <div
      className="w-24 h-24 bg-gray-800 rounded-full relative transition-transform duration-50"
      style={styles}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full opacity-70"></div>
    </div>
  </div>
}
