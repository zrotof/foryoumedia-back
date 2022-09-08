const router = require('express').Router();
const cors = require('../cors');
const employeesRoutes = require('./employees/employees');
const showsRoutes = require('./shows/shows');
const usersRoutes = require('./users/users');
const yearsRoutes = require('./schedule/years');
const programsRoutes = require('./schedule/years');

router.use("/employees", cors.corsWithOptions, employeesRoutes);

router.use("/shows", cors.corsWithOptions, showsRoutes);
router.use("/years", cors.corsWithOptions, yearsRoutes);
router.use("/programs", cors.corsWithOptions, programsRoutes);
router.use("/users", cors.corsWithOptions, usersRoutes);


module.exports = router;