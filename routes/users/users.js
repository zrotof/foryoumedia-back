const router = require('express').Router();
const { employeesList } = require('../../controllers/employees/employees.controller');

router.get('/list', employeesList);

module.exports = router;