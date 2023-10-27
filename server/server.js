const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// app.get('/', async (req, res) => {
//     try {
//         res.sendFile(path.join(__dirname, '../public/index.html'));
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

//endpoints
const {
    seed,
    getCar,
    getReviews,
    // createAccount,
    createAppointment
} = require('./controllers/controller.js');

const { login, register } = require('./controllers/auth.js');


// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'YOUR_GMAIL@gmail.com',
//         pass: 'YOUR_PASSWORD'
//     }
// });

app.get("/car_listing", getCar);
app.get("/user_reviews", getReviews);

app.post('/seed', seed);
app.post("/register", register);
app.post("/login", login);
app.post("/contact_information", createAppointment)

// app.post("/authentication", createAccount)
    



const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
