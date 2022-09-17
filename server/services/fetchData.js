import fetch from "node-fetch";

// Fetch api data
const fetchData = async (url = "") => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options); // Fetch response
  return await response.json(); // Return object
};

export default fetchData;