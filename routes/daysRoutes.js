// * Packages Import * //
const express = require("express");

// * Controller Import * //
const getAllBookedDays=require("../controllers/getAllBookedDays")

const route = express.Router();

route.route("/bookedDays").get(getAllBookedDays)

module.exports = route;
