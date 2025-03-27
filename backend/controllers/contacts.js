const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
}
const getSingle = async (req, res) => {
    // Get the ID from request parameters
    const contactId = new ObjectId(req.params.Id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]); // Return first match only
    });
}
module.exports = { getAll ,getSingle}; 