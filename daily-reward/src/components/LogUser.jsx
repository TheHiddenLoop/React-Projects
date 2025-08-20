import { useEffect, useState } from "react";

export function LogUser() {
  let [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  let users = [
    { email: "example@gmail.com", password: "123456", points: 0, lastClaimDate: "" },
    { email: "test@gmail.com", password: "654321", points: 0, lastClaimDate: "" },
  ];

  let [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("isLogged") === null) {
      localStorage.setItem("isLogged", "false");
    }
  }, []);

  function giveDailyReward(user) {
    let today = new Date().toDateString();

    if (user.lastClaimDate !== today) {
      user.points = (user.points || 0) + 1;
      user.lastClaimDate = today;
    }

    return user;
  }

  function handleSubmit(e) {
    e.preventDefault();

    let isUser = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (isUser) {
      let updatedUser = giveDailyReward({ ...isUser });

      localStorage.setItem("isLogged", "true");
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      setIsLogged(true);
      setCurrentUser(updatedUser);
    } else {
      alert("User does not exist");
    }
  }

  function handleLogout() {
    localStorage.setItem("isLogged", "false");
    localStorage.removeItem("currentUser");
    setIsLogged(false);
    setCurrentUser(null);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-white-300 to-blue-300 p-4">
      {isLogged && currentUser ? (
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <p className="mt-2 text-gray-600">Welcome back,</p>
          <p className="text-lg font-medium text-indigo-600">{currentUser.email}</p>

          <div className="mt-4 bg-indigo-100 text-indigo-800 font-semibold py-2 rounded-lg">
            Reward Points: {currentUser.points}
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full"
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}
