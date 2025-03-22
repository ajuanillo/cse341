const home = ((req, res, next) => {
    res.json('You are at home')
});

const personData = ((req, res, next) => {
    res.json('Data of person')
});

module.exports = { home, personData };