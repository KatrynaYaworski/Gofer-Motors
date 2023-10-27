require("dotenv").config();
const nodemailer = require("nodemailer");
const Sequelize = require("sequelize");
const { CONNECTION_STRING, RECEIVING_EMAIL, SENDING_EMAIL, EMAIL_PASSWORD } = process.env;
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

function sendEmail(customerInfo){
  const { Name, Last_Name, Phone, Email,  Comments, car_id, Model, Year } = customerInfo

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: SENDING_EMAIL,
        pass: EMAIL_PASSWORD
    }
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
    Vehicle ID: ${car_id + Model + Year }
    `
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
}

module.exports = {  
  seed: async (req, res) => {
    try {
        await sequelize.query(
            `
            DROP TABLE IF EXISTS users;
            DROP TABLE IF EXISTS user_reviews;
            DROP TABLE IF EXISTS contact_information;
            DROP TABLE IF EXISTS car_listing;

            CREATE TABLE users(
              user_id SERIAL PRIMARY KEY,
              isAdmin BOOLEAN DEFAULT false,
              username varchar (50) NOT NULL,
              password varchar (200) NOT NULL
          );
            
            CREATE TABLE car_listing (
                car_id SERIAL PRIMARY KEY,
                Make varchar(100),
                Model text,
                Price text,
                Year integer,
                Down_Payment text,
                Description text
            );
      
            CREATE TABLE user_reviews(
                reviews_id SERIAL PRIMARY KEY,
                Rating integer,
                Review text,
                Timestamp text,
                review_title varchar(70)
                );
  
            CREATE TABLE contact_information (
                contact_id SERIAL PRIMARY KEY,
                Name varchar(200),
                Last_Name varchar(200),
                Phone varchar(20),
                Email varchar(50),
                Comments text,
                car_id integer,
                FOREIGN KEY(car_id) REFERENCES car_listing(car_id)
            );

            INSERT INTO car_listing (Make, Model, Price, Year, Down_Payment, Description)
            VALUES ('Dodge', 'Journey','$5,500', 2014, '$2,300', 'Clean Title'),
                   ('Ford', 'Escape','Ask for Cash Price', 2018, '$2,500', 'Clean Title'),
                   ('Kia', 'Rio','$6,900', 2015, '$1,800', 'Clean Title'),
                   ('Buick', 'Encore','Ask for Cash Price', 2014, '$2,000', 'Clean Title'),
                   ('Buick', 'Verano','$7,400', 2014, '$2,500', 'Clean Title'),
                   ('Dodge', 'Dart','$6,900', 2016, '$2,000', 'Clean Title'),
                   ('Nissan', 'Altima','$6,500', 2014, '$1,800', 'Clean Title'),
                   ('Hyundai', 'Elantra','$5,800', 2017, '$1,500', 'Clean Title'),
                   ('BMW', '328','Ask for Cash Price', 2015, '$3,000', 'Clean Title'),
                   ('BMW', 'X3','Ask for Cash Price', 2017, '$3,500', 'Clean Title'),
                   ('Range Rover', 'Evoque', 'Ask for Cash Price', 2013, '$3,500', 'Clean Title'),
                   ('Mitsubishi', 'Mirage','Ask for Cash Price', 2019, '$2,000', 'Clean Title');

            INSERT INTO user_reviews(Rating, Review, Timestamp, review_title)
            VALUES (5, 'The car was in perfect condition', '2023-09-20', 'Bought the car of my dreams'),
             (5, 'Very good car, good condition and as described', '2023-09-20', 'Almost like new!'),
             (5, 'The car was in perfect condition', '2023-09-22', 'Will buy again'),
             (5, 'Smooth transaction and friendly staff', '2023-09-18', 'Excellent service'),
             (5, 'Pleasant transaction with cordial staff', '2023-09-15', 'Extremely happy with my purchase'),
             (5, 'Car looks and drives great, very happy', '2023-09-17', 'The best car Ive ever bought');

            INSERT INTO contact_information (Name, Last_Name, Phone, Email, Comments, car_id)
            VALUES ('Michelle','Sauceda', '98090808', '@gofer.com', 'I want an appointment this week',1);

        `)
        .then(() => {
            console.log("DB seeded!");
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log("error seeding DB", err);
        });
    } catch(err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
  },
  
  getCar: (req, res) => {
    sequelize.query(`
      SELECT * FROM car_listing;
    `)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => res.status(500).send(err))
  },

getReviews: (req, res) => {
  sequelize.query(`
    SELECT * FROM user_reviews;
  `)
  .then(dbRes => res.status(200).send(dbRes[0]))
  .catch(err => res.status(500).send(err))
},

// createAccount: (req,res) => {
//   const {username,password} = req.body

//   sequelize.query(`
//   INSERT INTO account(username,password)
//   VALUES ('${username}', ${password})
//    RETURNING *
//         `)
//         .then(dbRes => {
//           res.status(200).send(dbRes[0])
//       })
//       .catch(err => {
//         console.log(err)
//         res.status(400).send(err)
//       })
//     },

    createAppointment: (req,res) => {
      const {Name, Last_Name, Phone, Email,  Comments, car_id} = req.body

sequelize.query(`
    INSERT INTO contact_information (Name, Last_Name, Phone, Email, Comments, car_id)
    VALUES ('${Name}', '${Last_Name}','${Phone}', '${Email}', '${Comments}', ${car_id})
    RETURNING *

            `)
            .then(dbRes => {
              sendEmail(req.body)
              res.status(200).send(dbRes[0])
          })
          .catch(err => {
            console.log(err)
            res.status(400).send(err)
          })
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

