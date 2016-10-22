var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Home Controller: ', Date.now());
    next();
});



router.get('/variable', function (req, res, next) {
    console.log('Home Controller: ', Date.now());
    res.render('home/index', {
        title: 'Basic Variable',
        user: {
            firstname: 'Manish',
            lastname: 'Prakash',
            email: 'manish@excellencetechnologies.in'
        }
    }
    );
});



router.get('/', function (req, res) {
    res.render('index');
});

router.get('/about', function (req, res) {
    res.render('home/about');
});


module.exports = router;