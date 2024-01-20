// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Utils Import * //
const pool = require("../database/db");

//@desc Get all days that are fully booked within a date range
//@route GET /api/days/bookedDays
//@access public
const getAllBookedDays = asyncHandler(async (req, res) => {
 

  try {
    // Query to get fully booked days within the date range
    const query = `
      SELECT day
      FROM days
      WHERE booked_slots = 5;
    `;

    const result = await pool.query(query);

    // Extract the fully booked days from the query result
    const fullyBookedDays = result.rows.map((row) => row.day);

    res.json({ fullyBookedDays });
  } catch (error) {
    console.error("Error fetching fully booked days:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = getAllBookedDays;
