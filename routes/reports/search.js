const { Op } = require("sequelize");
const Reports = require("../../models/Reports");

const search = async (req, res) => {
    const data = req.query;
    const where = {};

    if (data.object_id) {
        where.object_id = data.object_id;
    }

    const endDate = data.endDate;
    const startDate = data.startDate;

    if (startDate && endDate) {
        where.createdAt = {
            [Op.and]: {
                [Op.gte]: startDate,
                [Op.lte]: endDate,
            },
        };
    }

    // Calculate the start and end dates for the current week if 'weekly' is provided
    if (data.weekly) {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(today);
        endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
        endOfWeek.setHours(23, 59, 59, 999);

        where.createdAt = {
            [Op.and]: {
                [Op.gte]: startOfWeek,
                [Op.lte]: endOfWeek,
            },
        };
    }

    const query = {
        where: where,
    };

    try {

        if (data.today) {
            // Retrieve current month's totalAmount separately
            const today = new Date();
            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
          
            query.where.createdAt = {
              [Op.and]: {
                [Op.gte]: startOfMonth,
                [Op.lte]: endOfMonth,
              },
            };
          }
          

        const reports = await Reports.findAll(query);
        let totalAmount = await Reports.sum('amount', query);


        res.status(200).json({
            totalAmount: totalAmount,
            reports: reports,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = search;
