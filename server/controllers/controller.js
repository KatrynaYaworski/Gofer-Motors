require("dotenv").config();

const { sequelize } = require("../util/database");
const { RECEIVING_EMAIL, SENDING_EMAIL, EMAIL_PASSWORD } = process.env;

function sendEmail(customerInfo) {
  const { Name, Last_Name, Phone, Email, Comments, car_id, Model, Year } =
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
    subject: `${Name} ${Last_Name} has sent an inquiry!`,
    text: `
    Name: ${Name} ${Last_Name}
    Phone: ${Phone}
    Email: ${Email}
    Comments: ${Comments}
    Vehicle ID: ${car_id + Model + Year}
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
    const {make, model, price, year, down_payment, description, sold, miles} = req.body;
    sequelize
    .query(
      `
      INSERT INTO car_inventory (Make, Model, Price, Year, Down_Payment, Description, Sold, Miles)
              VALUES ('${make}', '${model}', '$${price}', ${year}, '$${down_payment}', '${description}', ${sold}, ${miles})
      `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
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

  getReviews: (req, res) => {
    sequelize
      .query(
        `
    SELECT * FROM user_reviews;
  `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => res.status(500).send(err));
  },

  createAppointment: (req, res) => {
    const { Name, Last_Name, Phone, Email, Comments, car_id } = req.body;

    sequelize
      .query(
        `
    INSERT INTO contact_information (Name, Last_Name, Phone, Email, Comments, car_id)
    VALUES ('${Name}', '${Last_Name}','${Phone}', '${Email}', '${Comments}', ${car_id})
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

// deleteTask:(req,res) => {
//   const {task_id} = req.params
//   console.log(task_id)
//   sequelize.query(`
//       DELETE FROM tasks
//       WHERE task_id = ${task_id};
//   `)
//   .then(dbRes => res.status(200).send(dbRes[0]))
//   .catch(err => res.status(500).send(err))
// },

// updateTask:(req,res) => {
//   const taskId = req.params.task_id;
//   const {task_description, task_date, task_status} = req.body;

//   sequelize.query(`
//   UPDATE tasks
//   SET
//   task_description= '${task_description}',
//   task_date='${task_date}',
//   task_status='${task_status}'
//   WHERE task_id= '${taskId}';
//   `)
//   .then(dbRes => {
//     res.status(200).send(dbRes[0])
// })
// .catch(err => {
//   console.log(err)
//   res.status(400).send(err)
// })
// }
