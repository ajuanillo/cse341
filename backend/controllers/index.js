const awesomeFunction = ((req, res, next) => {
    res.json('Awesome person')
});

const anotherFunction = ((req, res, next) => {
    res.json('Another person')
});

module.exports = { awesomeFunction, anotherFunction };