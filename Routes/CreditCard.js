const express = require("express");
const router = express.Router();
const db = require("../Db");

router.post("/CreditCard", async (req, res) => {
  let {
    CardNumber,
    CustomerID,
    ExpirationDate,
    SecurityCode
  } = req.body;
  try {
    var sql = `INSERT INTO Account VALUES  ('${CardNumber}','${CustomerID}','${ExpirationDate}','${SecurityCode}')`;
    db.query(sql, function (err, result) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }
      return res.status(200).json({
        success: true,
        message: `1 record created in CreditCard Table`,
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
