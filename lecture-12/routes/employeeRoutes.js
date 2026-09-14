    const express=require("express");
    const router=express.Router();
    const {
    getEmployees,getEmployeeById,addEmployee,updateEmployee,deleteEmployee
}=require("../controller/employeeController.js");


router.get("/",getEmployees)
///employee get by their id
router.get("/:id",getEmployeeById)

//Create
router.post("/",addEmployee)

//update
router.put("/:id",updateEmployee)
//delete
router.delete("/:id",deleteEmployee)

module.exports=router;