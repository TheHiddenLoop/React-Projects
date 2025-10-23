import React, { useRef, useEffect, useState } from 'react';
import { imageData } from '../data';
import { ImageCard } from './ImageCard';
import { Details } from './Details';

export function Gallery() {
  const canvasRef = useRef(null);
  const [data, setData] = useState({
    name: '',
    size: '',
    date: '',
    description: ''
  });

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const handleImageClick = (item) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    setData({
      name: item.name,
      size: item.size,
      date: item.date,
      description: item.description
    });

    img.src = item.link;
  };

  return (
    <div className="flex h-screen p-4 gap-6">
      <div className="w-1/3 overflow-y-auto pr-2">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {imageData.map((e) => (
            <div
              key={e.id}
              className="cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => handleImageClick(e)}
            >
              <ImageCard title={e.name} image={e.link} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-2/3 flex flex-col gap-4">
        <div className="flex-1">
          <canvas
            ref={canvasRef}
            className="w-full h-[60vh] border rounded-lg shadow-lg bg-black"
          ></canvas>
        </div>

        <div className="h-auto">
          <Details {...data} />
        </div>
      </div>
    </div>
  );
}
