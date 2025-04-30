const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const globalError = require("./middleware/GlobalError");
const dbConnection = require("./config/database");
const userRoutes = require("./routes/UserRoutes");
const notesRoutes = require("./routes/NotesRoutes");

// env
dotenv.config({ path: "config.env" });

// Database connection
dbConnection();

// Return response as a JSON object
app.use(express.json());

// cors
app.use(cors());

// Routes
app.use("/auth", userRoutes);
app.use("/notes", notesRoutes);

// Global Error Handler
app.use(globalError);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Node now is ${process.env.NODE_ENV}`);
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

// Handle unhandled rejections
process.on("unhandledRejection", (error) => {
  console.error("UnhandledRejection connection error:", error.message);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;
