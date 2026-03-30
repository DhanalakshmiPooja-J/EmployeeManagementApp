const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const employeeRoutes = require("./routes/employeeroutes")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// DB Connection
connectDB()

// Routes
app.use("/api/employees", employeeRoutes)


// Test route
app.get("/", (req, res) => {
  res.send("Employee API Running")
})


// Start server
const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})