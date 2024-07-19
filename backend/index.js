const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection
mongoose
  .connect("mongodb+srv://shop:shop@cluster0.nsxcvfy.mongodb.net/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });

// API creation
app.get("/", (req, res) => {
  res.send("running ...");
});

// Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));

// Creating upload endpoint for images
app.post("/upload", upload.single("product"), (req, res) => {
  console.log("Received file:", req.file);
  console.log("Request body:", req.body);
  if (req.file) {
    res.json({
      success: true,
      image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
  } else {
    res.status(400).json({ success: false, message: "File upload failed" });
  }
});

// Port
app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port " + port);
  } else {
    console.log(error);
  }
});
