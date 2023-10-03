import Employee from "../Models/employees.schema.js";

export const createEmp = async (req, res) => {
    try {
        const employee = new Employee(req.body)
        await employee.save()
        res.status(200).json(employee)
    } catch (error) {
        res.status(500).json({ error: "error in create employee" })
    }
}
export const getAllEmp = async (req, res) => {
    try {
        const employee = await Employee.find()
        res.status(200).json(employee )


    } catch (error) { res.status(500).json({ error: "error in get employee" }); }
};
export const getEmpById = async (req, res) => {
    try {
        const empId = req.params.id
        const employee = await Employee.findById(empId)
        res.status(200).json({ employee })

    } catch (error) { res.status(500).json({ error: "error in get employee byId" }); }
};
export const updateEmpById = async (req, res) => {
    try {
        const empId = req.params.id;
        const { firstName, lastName, email, position } = req.body
        const result = await Employee.updateOne(
          { _id: empId },
          { firstName, lastName, email, position }
        );
        if (result.matchedcount === 0) {
            res.status(400).json({error:"empid not found"})
        }

        const updateEmp = await Employee.findById(empId)
res.status(200).json({updateEmp})
    } catch (error) { res.status(500).json({ error: "error in update employee" }); }
};



export const deleteEmpById = async (req, res) => {
    try {
        const empId = req.params.id;
        const result = await Employee.deleteOne({_id:empId})
        if (result.deletedcount === 0) {
    res.status(400).json({error:"emp id not found"})
        }
        res.status(200).json({ message: "empid deleted" })
    } catch (error) { res.status(500).json({ error: "error in delete employee" }); }
};
