import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export function QRCodeDisplay({ value, size = 256, level = 'H', includeMargin = true }) {
  const qrRef = useRef();

  const handleDownload = () => {
    const svg = qrRef.current?.querySelector('svg');
    if (!svg) {
      alert('QR code not available.');
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    canvas.width = size;
    canvas.height = size;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
      const pngUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = `qrcode_${Date.now()}.png`;
      link.click();
    };

    img.onerror = () => {
      alert('Failed to generate QR image.');
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  if (!value) {
    return <div className="qr-placeholder">Enter text to generate a QR code.</div>;
  }

  return (
    <div className="qr-code-container" ref={qrRef}>
      <QRCodeSVG
        value={value}
        size={size}
        level={level}
        includeMargin={includeMargin}
        className="qr-code-svg"
      />
      <button onClick={handleDownload} className="download-button">
        Download QR Code
      </button>
    </div>
  );
}
