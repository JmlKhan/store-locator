const Store = require('../models/Store');

exports.getStores = async (req, res, next) => {
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

exports.createStore = async (req, res, next) => {
    try{
        console.log(req.body)
        const store = await Store.create(req.body);

        res.status(201).json({
            status: 'success',
            data: store
        })

    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
}