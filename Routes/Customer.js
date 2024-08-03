const express = require("express");
const router = express.Router();
const db = require("../Db");

router.post('/Customer', async (req, res) => {
  let { CustomerID, name, street, Address,Phone ,Email,BillingMethod } = req.body;
  try {
    var sql = `INSERT INTO Customer VALUES ('${CustomerID}','${name}','${street}','${Address}','${Phone}','${Email}',${BillingMethod}'')`;
    db.query(sql, function (err, result) {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err.message,
          });
        }
        return res.status(200).json({
          success: true,
          message: `1 record created in Customer Table`,
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
