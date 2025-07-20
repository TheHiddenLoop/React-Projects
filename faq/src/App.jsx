import Faq from './components/Faq';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <Faq />
      </div>
    </div>
  );
}

export default App;