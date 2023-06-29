const Reports = require("../../models/Reports")
const create = async (req, res) => {
    const data = req.body

    let createData = {
        amount: data.amount,
        description: data.description,
        object_id: data.object_id,
        object_name: data.object_name,
        salary: data.salary,
        user_id: data.userId
    }

    await Reports.create(createData).then((response) => {
        return res.json(response)
    })

}
module.exports = create;