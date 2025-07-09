import './App.css'
import { Button } from './components/Button'
import { Content } from './components/Content'
import { Input } from './components/Input'
function App() {
  return (
    <div className=" font-sans h-screen flex bg-blue-700 text-white justify-center items-start pt-10">
      <div>
        <Content />
        <Input />
        <Button disabled={false}>Sign Up</Button>
      </div>
    </div>
  )
}

export default App
