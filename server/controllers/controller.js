require("dotenv").config();
const axios = require("axios");
const nodemailer = require('nodemailer');
const { sequelize } = require("../util/database");
const { RECEIVING_EMAIL, SENDING_EMAIL, EMAIL_PASSWORD } = process.env;

function sendEmail(customerInfo) {
  const { firstName, lastName, phone, email, comments, car_id, model, year } =
    customerInfo;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SENDING_EMAIL,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: SENDING_EMAIL,
    to: RECEIVING_EMAIL,
    subject: `${firstName} ${lastName} has sent an inquiry!`,
    text: `
    Name: ${firstName} ${lastName}
    Phone: ${phone}
    Email: ${email}
    Comments: ${comments}
    Vehicle ID: ${car_id + model + year}
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = {
  addCar: (req, res) => {
    const {make, model, sticker_price, year, description, sold, mileage, color, interior_color, body_type, title, engine, vin_number, stock_number, image_url} = req.body;
    console.log(req.body)
    sequelize
    .query(
      `
      INSERT INTO car_inventory (make, model, sticker_price, year, mileage, color, interior_color, body_type, title, engine, vin_number, stock_number, description, image_url)
              VALUES ('${make}', '${model}', ${sticker_price}, '${year}', ${mileage}, '${color}', '${interior_color}', '${body_type}', '${title}', '${engine}', '${vin_number}', '${stock_number}', '${description}', '${image_url}')
      `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      // .catch((err) => res.status(500).send(err));
    },
    deleteCar: (req, res) => {
      const { carId } = req.params;
      sequelize
        .query(
          `
          UPDATE contact_information
          SET car_id = NULL
          WHERE car_id = '${carId}'
          `
        )
        .then(() => {
          sequelize
            .query(
              `
              DELETE FROM car_inventory WHERE car_id = '${carId}';
              `
            )
            .then((dbRes) => res.status(200).send(dbRes[0][0]));
        })
        .catch((err) => res.status(500).send(err));
    },
  sellCar: (req, res) => {
    const { carId } = req.params;
        sequelize
          .query(
            `
            UPDATE car_inventory 
            SET Sold = true
            WHERE car_id = '${carId}';
            `
          )
          .then((dbRes) => res.status(200).send(dbRes[0][0]))
      .catch((err) => res.status(500).send(err));
  },
  
  getInventory: (req, res) => {
    console.log("fetching inventory")
    sequelize
    .query(
      `
      SELECT * FROM car_inventory;
      `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => res.status(500).send(err));
    },
    
    getUserAdmin: (req, res) => {
      const { username } = req.params;
      sequelize
        .query(
          `
          SELECT user_id, isAdmin, username
          FROM users
          WHERE username = '${username}';
      `
        )
        .then((dbRes) => res.status(200).send(dbRes[0][0]))
        .catch((err) => res.status(500).send(err));
    },


  verifyRecaptcha: (req, res) => {
    const { token } = req.body;
    axios
      .post("https://www.google.com/recaptcha/api/siteverify", null, {
        params: {
          secret: "YOUR_SECRET_KEY",
          response: token,
        },
      })
      .then((response) => {
        if (response.data.success) {
          res.status(200).json({ success: true });
        } else {
          res.status(400).json({ success: false, message: "reCAPTCHA verification failed" });
        }
      })
      .catch((error) => {
        res.status(500).json({ success: false, message: "Internal server error" });
      });
  },

  createContact: (req, res) => {
    const { firstName, lastName, phone, email, comments, carId } = req.body;

    sequelize
      .query(
        `
    INSERT INTO contact_information (first_name, last_name, phone, email, comments, car_id)
    VALUES ('${firstName}', '${lastName}','${phone}', '${email}', '${comments}', ${carId})
    RETURNING *

            `
      )
      .then((dbRes) => {
        sendEmail(req.body);
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send(err);
      });
  },
};