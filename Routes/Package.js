const express = require("express");
const router = express.Router();
const db = require("../Db");

router.post("/Package", async (req, res) => {
  let {
    PackageID,
    Type,
    Weight,
    DeliveryTime,
    Status,
    AccountID,
    CreditCardNumber,
    EmployeeID,
    TruckID,
    PlaneID,
    WarehouseID
  } = req.body;
  try {
    var sql = `INSERT INTO Package VALUES  ('${PackageID}','${Type}',${Weight},'${DeliveryTime}','${Status}','${AccountID}','${CreditCardNumber}','${EmployeeID}','${TruckID}','${PlaneID}','${WarehouseID}')`;
    db.query(sql, function (err, result) {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }
      return res.status(200).json({
        success: true,
        message: `1 record created in Package Table`,
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
