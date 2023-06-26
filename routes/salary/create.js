const Salary = require("../../models/Salary")

const create = async (req, res) => {
    const data = req.body

    let createData = {
        pg_amount: data.pgAmount,
        recharge_amount: data.rechargeAmount,
        salary: data.salary,
        user_id:data.userId
    }

    await Salary.create(createData).then((response) => {
        return res.json(response)
    })

}
module.exports = create;