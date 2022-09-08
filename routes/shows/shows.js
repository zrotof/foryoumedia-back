const router = require('express').Router();
const { createShow, showsList, updateShow, deleteShow, getShow } = require('../../controllers/shows/shows.controller')
const multerOptions = require('../../middlewares/multer-config');

router.get('/list', showsList);
router.get('/:id', getShow);
router.post('/', multerOptions.single('image'), createShow);
router.put('/:id', multerOptions.single('image'), updateShow);
router.delete('/:id', deleteShow);

module.exports = router;