const Store = require('../models/Store');

exports.getAll = async (req, res, next) => {
    try{
        const stores = await Store.find();

        return res.status(200).json({
            status: 'success',
            result: stores.length,
            data: {
                stores
            }
        })
    }catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Server error' });
    }
};