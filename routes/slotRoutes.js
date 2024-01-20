// * Packages Import * //
const express = require("express");

// * Controller Import * //
const getBookedSlotsByDay=require("../controllers/getBookedSlotsByDay");
const postASlot=require("../controllers/postASlot")

const route = express.Router();

route.route("/addSlot").post(postASlot);
route.route("/getBookedSlotsByDay").get(getBookedSlotsByDay);

module.exports = route;
