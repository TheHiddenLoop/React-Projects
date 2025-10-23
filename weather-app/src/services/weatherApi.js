export const fetchWeather = async (city) => {
  const API_KEY = 'f41d954a3439847b2ee7e0d51e708833';
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) throw new Error("City not found");
  return response.json();
};
