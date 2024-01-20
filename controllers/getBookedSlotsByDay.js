// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Utils Import * //
const pool = require("../database/db");

//@desc Get booked slots for the day
//@route GET /api/slots/getBookedSlotsByDay
//@access public
const getBookedSlotsByDay = asyncHandler(async (req, res) => {
  // Extract query parameters from the request
  let { date } = req.query;
  const parts = date.split("/");
  const days = parseInt(parts[0]) + 1;
  const month = parseInt(parts[1]) - 1;
  const year = parseInt(parts[2]);
  date = new Date(year, month, days);

  // Validate date parameter
  if (!date) {
    return res.status(400).json({ error: "Date parameter is required" });
  }

  try {
    // Query to get all slots for the given date
    const query = `
      SELECT *
      FROM Slots
      WHERE day = $1;
    `;

    const result = await pool.query(query, [date]);

    // Extract the booked slots for the given date from the query result
    const bookedSlots = [];
    result.rows.map((row) => bookedSlots.push(row.slot_number));

    res.json({ bookedSlots });
  } catch (error) {
    console.error("Error fetching booked slots by day:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = getBookedSlotsByDay;
