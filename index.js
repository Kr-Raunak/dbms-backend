const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const db = require("./Db");
const Customer = require("./Routes/Customer.js")
const Viewdata = require("./Routes/Viewdata")
const Employee = require("./Routes/Employee.js")
const Package = require("./Routes/Package.js")
const Account = require("./Routes/Account.js")
const CreditCard= require("./Routes/CreditCard.js")
const Truck= require("./Routes/Truck.js")
const Plane= require("./Routes/Plane.js")
const Warehouse= require("./Routes/Warehouse.js")
const Orders= require("./Routes/Orders.js")
const loc_of_pkg= require("./Routes/loc_of_pkg.js")
db.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
  });

app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );

app.use(express.json())
app.use("/api/v1" , Customer);
app.use("/api/v1" , Viewdata);
app.use("/api/v1" , Package);
app.use("/api/v1" , Employee);
app.use("/api/v1" , Account);
app.use("/api/v1" , CreditCard);
app.use("/api/v1" , Truck);
app.use("/api/v1" , Plane);
app.use("/api/v1" , Warehouse);
app.use("/api/v1" , Orders);
app.use("/api/v1" , loc_of_pkg);

app.get("/", (req,res) => {
    console.log(`Hello`);
    res.send("Heloo")
  });
app.listen(port, () => {
    console.log(`SERVER STARTED AT PORT ${port}`);
  });