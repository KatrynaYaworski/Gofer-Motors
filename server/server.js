require("dotenv").config({ path: "../.env" });
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path")
const app = express();
const AWS = require("aws-sdk");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use(express.static(path.join(__dirname, '../build')))

//endpoints
const {
  getInventory,
  createContact,
  getUserAdmin,
  sellCar,
  addCar,
  deleteCar,
} = require("./controllers/controller.js");

const { seed } = require("./controllers/seed.js");

const { login, register } = require("./controllers/auth.js");

app.get("/car_inventory", getInventory);
app.get("/users/:username", getUserAdmin);

app.post("/seed", seed);
app.post("/register", register);
app.post("/login", login);
app.post("/contact_information", createContact);
app.post("/car_inventory", addCar);

app.delete("/car_inventory/:carId", deleteCar);

app.put("/car_inventory/:carId", sellCar);

app.post("/upload_image", async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  const { file } = req.files;
  console.log(process.env)
  AWS.config.update({
    accessKeyId: S3_ACCESS_KEY_ID,
    secretAccessKey: S3_SECRET_ACCESS_KEY,
  });
  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET_NAME },
    region: S3_REGION,
  });

  const params = {
    Bucket: S3_BUCKET_NAME,
    Key: file.name,
    Body: file.data,
  };

  try {
    var upload = s3.upload(params).promise();
  } catch (e) {
    console.log(e);
  }

  await upload.then((data) => {
    res.status(200).send(data.Location);
  });
});

app.post("/recaptcha", async (req, res) => {
  const { token } = req.body;

  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    // Check response status and send back to the client-side
    if (response.data.success) {
      res.status(200).send("Human 👨 👩");
    } else {
      res.status(403).send("Robot 🤖");
    }
  } catch (error) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(error);
    res.status(500).send("Error verifying reCAPTCHA");
  }
});

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../build/index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
