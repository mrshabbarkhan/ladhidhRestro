const express = require("express");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db_config");
const errorHandler = require("./middleware/errorHandler");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 5000;
const twilio = require("twilio");
const session = require("express-session"); // Optional for session management
const fileUpload = require("express-fileupload");
const cors = require("cors");
app.use(cors());
// DB Connection
connectDB();
// Body Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    msg: "WELCOME TO Ladhidh Restro",
  });
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shabbarkhan.js@gmail.com", // Your Gmail address
    pass: "orqw fjut qnoj mcye", // Your Gmail password or App password if 2FA is enabled
  },
});

app.post("/send-otp", (req, res) => {
  const { email } = req.body; // Get the recipient email from the request body

  if (!email) {
    return res.status(400).send("Email is required");
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP Code For Ladhidh Veryfication ${otp}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Error sending email");
    }
    console.log("Email sent: " + info.response);
    res.status(200).send({ message: "OTP sent", otp }); // Send OTP in response for demo purposes only; in production, do not send OTP back to client
  });
});
// app.use(
//   session({
//     secret: "ladhidh",
//     resave: false,
//     saveUninitialized: true,
//   })
// );



// Endpoint to send OTP
// app.post("/send-sms", (req, res) => {
//   const { phoneNumber } = req.body; // Get the recipient's phone number from the request body

//   if (!phoneNumber) {
//     return res.status(400).send("Phone number is required");
//   }

//   // Generate a random 6-digit OTP
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   // Save OTP in session for later verification (you can also use a database)
//   req.session.otp = otp;

//   // Send OTP via Twilio
//   client.messages
//     .create({
//       body: `Your OTP code is ${otp}`,
//       from: "+16692383723", // Your Twilio phone number
//       to: phoneNumber,
//     })
//     .then((message) => {
//       console.log("Message sent: ", message.sid);
//       res.status(200).send("OTP sent successfully");
//     })
//     .catch((error) => {
//       console.error("Error sending OTP: ", error);
//       res.status(500).send("Failed to send OTP");
//     });
// });

// // Endpoint to verify OTP
// app.post("/verify-otp", (req, res) => {
//   const { otp } = req.body;

//   if (!otp) {
//     return res.status(400).send("OTP is required");
//   }

//   // Verify OTP (in this example, comparing with session stored OTP)
//   if (otp === req.session.otp) {
//     res.status(200).send("OTP verified successfully");
//   } else {
//     res.status(400).send("Invalid OTP");
//   }
// });

// User Routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/user/cart", require("./routes/cartRoutes"));
app.use("/api/admin", require("./routes/Admin Routes/adminRoute"));
app.use("/api/admin/banner", require("./routes/Admin Routes/bannerRoute"));
app.use(
  "/api/admin/products",
  require("./routes/Admin Routes/adminProductRoute")
);
app.use("/api/user/products", require("./routes/userproductsRoute"));
app.use(
  "/api/admin/category",
  require("./routes/Admin Routes/admincategoryRoute")
);



// use client App

app.use(express.static('/'))

// Car Service Routes

// errorHandler middleware

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`.bgBlue.black);
});
