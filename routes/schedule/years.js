const router = require('express').Router();

const { yearsList, createYear, deleteYear  } = require('../../controllers/schedule/years.controller');

router.get('/list', yearsList);
//router.get('/:id', getYear);
router.post('/', createYear);
//router.delete('/', deleteYear);

module.exports = router;