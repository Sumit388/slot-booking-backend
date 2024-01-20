// * Packages Import * //
const express = require("express");
const dotenv = require("dotenv").config();
const cors=require("cors");


// * Routes Import * //
const daysRoutes = require("./routes/daysRoutes");
const slotRoutes = require("./routes/slotRoutes");


// * Middleware Import * //
const errorHandler = require("./middlewares/errorHandler");

// * Utils Import * //

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: '*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/days",daysRoutes);
app.use("/api/slots",slotRoutes);
app.use(errorHandler);


try {
  app.listen(port, () => console.log(`Server has started on ${port}`));
} catch (err) {
  console.log(err);
}
