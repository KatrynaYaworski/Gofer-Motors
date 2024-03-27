const axios = require("axios");


module.exports = {
    verifyRecaptcha: (req, res) => {
        const { token } = req.body;
        axios
          .post("https://www.google.com/recaptcha/api/siteverify", null, {
            params: {
              secret: "??SECRET_KEY",
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
  };