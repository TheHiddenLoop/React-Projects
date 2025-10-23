export default function CardSection({ h1, h2 }) {
  return (
    <div className="bg-[#f5f7fa] min-h-[90vh] flex items-center">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-24 py-4 w-full gap-10">
        <div className="max-w-lg space-y-4 text-center md:text-left">
          <p className="text-5xl font-semibold text-gray-800">{h1}</p>
          <p className="text-5xl font-semibold text-[#4caf4f]">{h2}</p>
          <p className="text-gray-600">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-[#4caf4f] hover:scale-105 text-white px-8 py-3 rounded hover:bg-[#43a047] transition">
            Register
          </button>
        </div>
        <div>
          <img
            src="/images/Illustration.svg"
            alt="Illustration"
            className="w-[300px] md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
