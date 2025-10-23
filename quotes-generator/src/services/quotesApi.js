export const quotesApi = async (city) => {
  const API_KEY = 'zuZ+sKw+da4zOqxpVbJH/Q==YwCADUljlWHpDYol';
  const response = await fetch(`https://api.api-ninjas.com/v1/quotes`,{
    headers: { 'X-Api-Key': API_KEY }
  })
  if (!response.ok) throw new Error("City not found");
  return response.json();
};
