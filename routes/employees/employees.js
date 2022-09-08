const router = require('express').Router();
const { employeesList, createEmployee, deleteEmployee, updateEmployee } = require('../../controllers/employees/employees.controller');
const multerOptions = require('../../middlewares/multer-config');

router.get('/list', employeesList);

router.post('/', multerOptions.single('image'), createEmployee);

router.put('/:id',multerOptions.single('image'), updateEmployee);

router.delete('/:id', deleteEmployee);

module.exports = router;