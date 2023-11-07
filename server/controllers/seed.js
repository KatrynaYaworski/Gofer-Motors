const { sequelize } = require("../util/database");

module.exports = {  
    seed: async (req, res) => {
      try {
          await sequelize.query(
              `
              DROP TABLE IF EXISTS users;
              DROP TABLE IF EXISTS user_reviews;
              DROP TABLE IF EXISTS contact_information;
              DROP TABLE IF EXISTS car_inventory;
  
              CREATE TABLE users(
                user_id SERIAL PRIMARY KEY,
                isAdmin BOOLEAN DEFAULT false,
                username varchar (50) NOT NULL,
                password varchar (200) NOT NULL
            );
              
              CREATE TABLE car_inventory (
                  car_id SERIAL PRIMARY KEY,
                  Make varchar(100),
                  Model text,
                  Price text,
                  Year integer,
                  Down_Payment text,
                  Description text,
                  Sold BOOLEAN DEFAULT false,
                  Miles integer               
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
                  FOREIGN KEY(car_id) REFERENCES car_inventory(car_id)
              );
  
              INSERT INTO car_inventory (Make, Model, Price, Year, Down_Payment, Description, Miles)
              VALUES ('Dodge', 'Journey','$5,500', 2014, '$2,300', 'Clean Title', 99),
                     ('Ford', 'Escape','Ask for Cash Price', 2018, '$2,500', 'Clean Title', 1125),
                     ('Kia', 'Rio','$6,900', 2015, '$1,800', 'Clean Title', 225),
                     ('Buick', 'Encore','Ask for Cash Price', 2014, '$2,000', 'Clean Title', 659),
                     ('Buick', 'Verano','$7,400', 2014, '$2,500', 'Clean Title', 2025),
                     ('Dodge', 'Dart','$6,900', 2016, '$2,000', 'Clean Title', 1278),
                     ('Nissan', 'Altima','$6,500', 2014, '$1,800', 'Clean Title', 562),
                     ('Hyundai', 'Elantra','$5,800', 2017, '$1,500', 'Clean Title', 789),
                     ('BMW', '328','Ask for Cash Price', 2015, '$3,000', 'Clean Title', 1245),
                     ('BMW', 'X3','Ask for Cash Price', 2017, '$3,500', 'Clean Title', 985),
                     ('Range Rover', 'Evoque', 'Ask for Cash Price', 2013, '$3,500', 'Clean Title', 123),
                     ('Mitsubishi', 'Mirage','Ask for Cash Price', 2019, '$2,000', 'Clean Title', 1958);
  
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
    }
};