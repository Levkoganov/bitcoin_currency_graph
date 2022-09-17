import currency_schema from "../models/currency_schema.js";

const bitcoin = async (req, res) => {
  const { date } = req.params; // Destruct date from params
  const findDate = await currency_schema.find({}); // Find all data from collection doucoment

  // Check if date exist
  if (findDate[0].dates[date] === undefined) {
    res.json({error: "date not found. please select other date."});
  } else {
    res.json({currency:findDate[0].dates[date], date:date});
  }
};

export default bitcoin;
