const Salary = require("../../models/Salary")

const get = async (req, res) =>{

    let userId = req.params

    if(!userId){
        return res.status(400).json({ error: 'user_id is required' });
    }

    const SalaryDetails = await Salary.findOne({where:{user_id : req.params.userId}})
   if(SalaryDetails){
    let data = {id : SalaryDetails?.id, userId :SalaryDetails?.user_id, salary:SalaryDetails?.salary, pagAmount : SalaryDetails?.pg_amount, rechargeAmount : SalaryDetails?.recharge_amount}
    return res.json(data)
   }else{
    return res.status(404).json({ error: 'Add Your details' });

   }

}
module.exports = get;