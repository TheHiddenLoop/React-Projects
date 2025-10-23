import { useState, useRef } from "react";

export const TemperatureConverter = () => {
    const [input, setInput] = useState("");
    const [fromUnit, setFromUnit] = useState("");
    const [toUnit, setToUnit] = useState("");
    const [output, setOutput] = useState("");
    const refs = useRef();

    function focusInput() {
        refs.current.focus();
    }

    function convertTemp() {
        if (!input || !fromUnit || !toUnit) {
            setOutput("Please fill in all fields.");
            return;
        }

        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            setOutput(((Number(input) * 9) / 5 + 32).toFixed(2) + " ℉");
        } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
            setOutput((Number(input) + 273.15).toFixed(2) + " K");
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            setOutput(((Number(input) - 32) * 5 / 9).toFixed(2) + " ℃");
        } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
            setOutput((((Number(input) - 32) * 5 / 9) + 273.15).toFixed(2) + " K");
        } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
            setOutput((Number(input) - 273.15).toFixed(2) + " ℃");
        } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
            setOutput((((Number(input) - 273.15) * 9 / 5) + 32).toFixed(2) + " ℉");
        } else if (fromUnit === toUnit) {
            let symbol = fromUnit === 'celsius' ? '℃' : fromUnit === 'fahrenheit' ? '℉' : 'K';
            setOutput(Number(input) + " " + symbol);
        }
    }

    return (
        <div className="converter-container">
            <h1 className="title">Temperature Converter</h1>

            <div className="input-group">
                <label onClick={focusInput} className="input-label">
                    Enter Temperature:
                </label>
                <input
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter value"
                    ref={refs}
                    className="input-field"
                />
            </div>

            <div className="dropdowns">
                <select
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                    className="select-box"
                >
                    <option value="">Select Unit</option>
                    <option value="celsius">Degree Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>

                <label className="to-label">To</label>

                <select
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                    className="select-box"
                >
                    <option value="">Select Unit</option>
                    <option value="celsius">Degree Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
            </div>

            <button onClick={convertTemp} className="convert-btn">Convert</button>

            <div className="output">{output}</div>
        </div>
    );
};
