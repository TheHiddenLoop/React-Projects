import { useState, useEffect } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  
  const [validation, setValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  useEffect(() => {
    const validatePassword = () => {
      setValidation({
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        specialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password),
      });
    };

    validatePassword();
  }, [password]); 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const ValidationItem = ({ isValid, text }) => {
    return (
      <li className={`flex items-center space-x-2 transition-colors duration-200 ${isValid ? 'text-green-500' : 'text-gray-400'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${isValid ? 'stroke-current' : 'stroke-current'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isValid ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
        <span>{text}</span>
      </li>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-inter">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Password Validator
        </h1>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300 font-medium mb-2">
            Enter a new password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-200"
            placeholder="••••••••"
          />
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <h2 className="text-gray-300 font-semibold mb-2">Password must contain:</h2>
          <ul className="space-y-2 text-sm">
            <ValidationItem
              isValid={validation.length}
              text="At least 8 characters long"
            />
            <ValidationItem
              isValid={validation.uppercase}
              text="At least one uppercase letter (A-Z)"
            />
            <ValidationItem
              isValid={validation.lowercase}
              text="At least one lowercase letter (a-z)"
            />
            <ValidationItem
              isValid={validation.number}
              text="At least one number (0-9)"
            />
            <ValidationItem
              isValid={validation.specialChar}
              text="At least one special character (!@#...)"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
