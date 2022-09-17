// Imports
import fetchData from "./fetchData.js";
import currency_schema from "../models/currency_schema.js";

// Store data in mongodb
const storeData = async () => {
  const url = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=ILS&apikey=${process.env.APIKEY}`;

  const response = await fetchData(url); // Fetch data
  const data = response["Time Series (Digital Currency Daily)"];
  const countDoc = await currency_schema.countDocuments({});

  // Check if document exist
  if (countDoc === 0) {
    await currency_schema({ dates: data }).save();

  } else {
    const filter = { dates: data }
    const findDoc = await currency_schema.find(filter);

    // Check if mongodb data equal to api data
    if (findDoc.length === 0 ) {
      await currency_schema.updateMany(filter); // Update mongodb data
    }
  }
};

export default storeData;
