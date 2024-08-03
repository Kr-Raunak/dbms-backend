const express = require("express");
const router = express.Router();
const db = require("../Db");

router.post("/loc_of_pkg", async (req, res) => {
  let {
    PackageID,
    WarehouseID,
    Start_timestamp,
    End_timestamp
  } = req.body;
  try {
    var sql = `INSERT INTO loc_of_pkg VALUES  ('${PackageID}','${WarehouseID}',${Start_timestamp},'${End_timestamp}')`;
    db.query(sql, function (err, result) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }
      return res.status(200).json({
        success: true,
        message: `1 record created in loc_of_pkg Table`,
      });
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message,
    });
  }
});

module.exports = router;
