const express = require("express");
const router = express.Router();
const db = require("../Db");

router.post('/Employee', async (req, res) => {
  let { EmployeeID,Name,Address ,Phone,Email ,Role } = req.body;
  try {
    var sql = `INSERT INTO Employee VALUES ('${EmployeeID}','${Name}','${Address}' ,'${Phone}','${Email}','${Role}' )`;
    db.query(sql, function (err, result) {
        if (err) {
          return res.status(400).json({
            success: false,
            message: err.message,
          });
        }
        return res.status(200).json({
          success: true,
          message: `1 record created in Employee Table`,
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
