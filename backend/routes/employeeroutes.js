const express = require("express")
const router = express.Router()
const Employee = require("../models/employee")


// GET ALL EMPLOYEES
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (error) {
    console.error("ERROR FETCHING:", error);   // 👈 IMPORTANT
    res.status(500).json({
      message: "Failed to fetch employees",
      error: error.message
    });
  }
});


// ADD EMPLOYEE
router.post("/", async (req, res) => {

  try {

    const employee = new Employee(req.body)

    const savedEmployee = await employee.save()

    res.json(savedEmployee)

  } catch (error) {

    res.status(500).json({ message: error.message })

  }

})


// UPDATE EMPLOYEE
router.put("/:id", async (req, res) => {

  try {

    const updatedEmployee = await Employee.findByIdAndUpdate(

      req.params.id,
      req.body,
      { new: true }

    )

    res.json(updatedEmployee)

  } catch (error) {

    res.status(500).json({ message: error.message })

  }

})


// DELETE EMPLOYEE
router.delete("/:id", async (req, res) => {

  try {

    await Employee.findByIdAndDelete(req.params.id)

    res.json({ message: "Employee Deleted" })

  } catch (error) {

    res.status(500).json({ message: error.message })

  }

})


module.exports = router