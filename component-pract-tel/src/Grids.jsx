import './App.css'

function App() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-12 gap-5 text-2xl'>
      <div className='col-span-1 sm:col-span-4 bg-[#c526ff] p-4 rounded-3xl'>Lorem ipsum dolor sit amet.</div>
      <div className='col-span-1 sm:col-span-4 bg-blue-200 p-4 rounded-3xl'>Lorem ipsum dolor sit amet.</div>
      <div className='col-span-1 sm:col-span-4 bg-yellow-200 p-4 rounded-3xl'>Lorem ipsum dolor sit amet.</div>
    </div>
  )
}