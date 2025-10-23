import React, { useState } from "react";

export default function Mortgage() {
  const [principal, setPrinicipal] = useState();
  const [interest, setInterest] = useState();
  const [numberOfYear, setNumberOfYear] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState();

  const handleSumbi = (e) => {
    e.preventDefault();
    const r = Number(interest) / 100 / 12;
    const n = Number(numberOfYear) * 12;
    const result = (Number(principal) * r * (1 + r) ** n) / ((1 + r) ** n - 1);
    setMonthlyPayment(Math.round(result));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center">
      <form
        onSubmit={handleSumbi}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-700">Mortgage Calculator</h2>

        <div>
          <label htmlFor="ammount" className="block text-sm font-medium text-gray-700">
            Enter Amount:
          </label>
          <input
            id="ammount"
            type="text"
            placeholder="Total amount"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setPrinicipal(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="intres" className="block text-sm font-medium text-gray-700">
            Interest Rate (%):
          </label>
          <input
            id="intres"
            type="text"
            placeholder="Interest rate"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            Loan Term (Years):
          </label>
          <input
            id="year"
            type="text"
            placeholder="Number of years"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setNumberOfYear(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Calculate
        </button>

        {monthlyPayment && (
          <p className="text-center text-green-700 font-medium">
            Your monthly mortgage payment will be <strong>${monthlyPayment}</strong>
          </p>
        )}
      </form>
    </div>
  );
}