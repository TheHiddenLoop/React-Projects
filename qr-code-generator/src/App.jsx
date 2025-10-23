import { useState } from 'react'
import { TextInput } from './components/TextInput'
import { QRCodeDisplay } from './components/QRCodeDisplay'
import './App.css'

function App() {
  const [text, setText] = useState("")

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>QR Code Generator</h1>
      </header>

      <main className="app-main">
        <TextInput value={text} onChange={handleInputChange} />
        <QRCodeDisplay value={text} />
      </main>
    </div>
  )
}

export default App
