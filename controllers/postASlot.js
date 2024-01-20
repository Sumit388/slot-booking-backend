// * Packages Import * //
const asyncHandler = require("express-async-handler");

// * Utils Import * //
const pool = require("../database/db");

//@desc post a new booked time slot
//@route POST /api/slots/addSlot
//@access public
const postASlot = asyncHandler(async (req, res) => {
  // Extract data from the request body
  const { slot_number, name, email, phone, day } = req.body;

  // Check if all required fields are present
  if (!slot_number || !name || !email || !phone || !day) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }

  const parts = day.split("/");
  const days = parseInt(parts[0]) + 1;
  const month = parseInt(parts[1]) - 1;
  const year = parseInt(parts[2]);

  date = new Date(year, month, days);

  try {
    // Check if the slot number already exists for the given day
    const checkSlotQuery = `
      SELECT COUNT(*) AS count
      FROM Slots
      WHERE day = $1 AND slot_number = $2;
    `;

    const slotResult = await pool.query(checkSlotQuery, [date, slot_number]);

    if (slotResult.rows[0].count > 0) {
      return res
        .status(400)
        .json({ error: "Slot number already exists for the given day" });
    }

    // Insert a new slot
    const insertSlotQuery = `
      INSERT INTO Slots (slot_number, name, email, phone, day)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const newSlotResult = await pool.query(insertSlotQuery, [
      slot_number,
      name,
      email,
      phone,
      date,
    ]);
    const newSlot = newSlotResult.rows[0];

    // Check if a row for the given day already exists in the "Days" table
    const checkDayQuery = `
      SELECT COUNT(*) AS count
      FROM days
      WHERE day = $1;
    `;

    const dayResult = await pool.query(checkDayQuery, [date]);

    if (dayResult.rows[0].count == 0) {
      // If the row for the given day doesn't exist, insert a new row
      const insertDayQuery = `
        INSERT INTO days (day, booked_slots)
        VALUES ($1, 1);
      `;

      await pool.query(insertDayQuery, [date]);
    } else {
      // If the row for the given day exists, update the booked_slots value
      const updateDayQuery = `
        UPDATE days
        SET booked_slots = booked_slots + 1
        WHERE day = $1;
      `;

      await pool.query(updateDayQuery, [date]);
    }

    res.status(201).json({ success: true, slot: newSlot });
  } catch (error) {
    console.error("Error posting a new slot:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = postASlot;
