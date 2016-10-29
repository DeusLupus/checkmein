var models  = require('../models');
var express = require('express');

var router  = express.Router();


router.get('/', function(req, res) {
  // res.render('./attendance/attendances');
  // console.log(req.session.logged_in)

     return res.render('./attendance/attendances', {
        logged_in: req.session.logged_in,
        email: req.session.username
        
    })
});

module.exports = router;


// router.get('/', function (req, res) {
//     // Person.findAll()
//     // .then(function(person_data) {
//     //     //console.log(person_data);
//     //     return res.render('index', {person_data: person_data, logged_in: req.session.logged_in, email: req.session.username, employee_id: req.session.employee_id})
//     // });
//     return res.render('index', {
//         logged_in: req.session.logged_in,
//         email: req.session.username,
//         employee_id: req.session.employee_id
//     })
// });