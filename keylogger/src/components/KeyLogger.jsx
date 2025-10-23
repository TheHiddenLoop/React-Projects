import React, { useEffect, useRef, useState } from 'react';

const KeyLogger = () => {
  const [logging, setLogging] = useState(false);
  const [log, setLog] = useState('');
  const [status, setStatus] = useState('');
  const logRef = useRef(null);

  useEffect(() => {
    if (logging) {
      window.addEventListener('keydown', handleKeyDown);
      setStatus('Logging started...');
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      if (log.length > 0) setStatus('Logging stopped.');
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [logging]);

  const handleKeyDown = (e) => {
    setLog((prev) => prev + e.key);
  };

  const startLogging = () => {
    setLog('');
    setLogging(true);
  };

  const stopLogging = () => {
    setLogging(false);
  };

  const downloadLog = () => {
    const blob = new Blob([log], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'keylog.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <h1>KeyLogger</h1>
      <div className="button-container">
        <button className="btn-start" onClick={startLogging}disabled={logging}>Start</button>
        <button className="btn-stop" onClick={stopLogging} disabled={!logging}>Stop</button>
        <button className={`btn-download ${log ? '' : 'hidden'}`}onClick={downloadLog}>Download</button>
      </div>

      <div className="log-box" ref={logRef}>
        {log || 'No keys logged yet.'}
      </div>
      <div className={`state-box ${logging ? 'logging' : ''}`}>
        {status || 'Idle'}
      </div>
    </div>
  );
};

export default KeyLogger;
