const express = require('express');
const SongController = require('../controllers/SongController');

const router = express.Router();

router.get('/status', SongController.getStatus);
router.post('/songs', SongController.createSong);
router.get('/songs', SongController.getSongs);
router.get('/statistics/total', SongController.getTotal);
router.get('/statistics/genres', SongController.getGenre);
router.get('/statistics/artists', SongController.getArtists);
router.get('/statistics/albums', SongController.getAlbums);
router.get('/seed/songs', SongController.seedSongs);

router.put('/songs/:id', SongController.updateSong);

router.delete('/songs/:id', SongController.deleteSong);

module.exports = router;
