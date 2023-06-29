const Salary = require("../../models/Salary")

const create = async (req, res) => {
    const data = req.body

    let createData = {
        pg_amount: data.pgAmount,
        recharge_amount: data.rechargeAmount,
        salary: data.salary,
        user_id: data.userId,
        remaining_amount: data.remainingAmount
    }

    const existingSalary = await Salary.findOne({ user_id: data.userId });

    if (existingSalary) {
        await Salary.update(createData, { where: { user_id: data.userId } }).then((response) => {
            return res.json(response)
        })
    }
    else {
        await Salary.create(createData).then((response) => {
            return res.json(response)
        })
    }



}
module.exports = create;