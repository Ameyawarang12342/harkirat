const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGOOSE_URI = process.env.MONGO_URI;
mongoose.connect(MONGOOSE_URI);
