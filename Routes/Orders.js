const express = require("express");
const router = express.Router();
const db = require("../Db");

router.post("/Orders", async (req, res) => {
  let {
    PackageID,
    SenderID,
    ReceiverID,
    ShippingDate,
    ShippingCost,
    PromisedTime
  } = req.body;
  try {
    var sql = `INSERT INTO Orders VALUES  ('${PackageID}','${SenderID}',${ReceiverID},'${ShippingDate}','${ShippingCost}','${PromisedTime}')`;
    db.query(sql, function (err, result) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }
      return res.status(200).json({
        success: true,
        message: `1 record created in Orders Table`,
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
