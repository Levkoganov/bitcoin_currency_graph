import mongoose from "mongoose";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to db
const db_connection = (URI) => {
  mongoose
    .connect(URI, options)
    .then(() => console.log("Connected to: " + URI))
    .catch((err) => console.log("DATABASE ERROR: " + URI + err));
};

export default db_connection;
