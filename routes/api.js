var express = require('express');
var router = express.Router();
const db = require("../models");

// All Orders listing
router.get('/v1/orders', function (req, res, next) {
    db.Orders.findAll().then(Orders => res.send(Orders));
});

// Get Order by ID
router.get('/v1/orders/:id', function (req, res, next) {
    db.Orders.findAll({
        where: {
            id: req.params.id
        }
    }).then(Orders => res.send(Orders));
});

//Post Product
router.post('/v1/orders', function (req, res, next) {
    db.Orders.create({
        products: JSON.stringify(req.body.products)
    }).then(Orders => res.send(Orders));
});

router.delete("/v1/orders/:id", (req, res) => {
    db.Orders.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("success"));
});

module.exports = router;
