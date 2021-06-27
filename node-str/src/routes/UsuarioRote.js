'use Strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsuarioController')

router.get('/get/', controller.get);
router.get('/get/:id', controller.getById);
router.get('/lista/', controller.getByNameLastname);
router.get('/get/nick/:nickname', controller.getByNickname);
router.post('/post/', controller.post);
router.put('/put/:id', controller.put);
router.put('/put/userUpdate/:id', controller.updateLastAndEmail);
router.put('/put/nickChange/:id', controller.updateNickname);
router.delete('/delete/:id', controller.delete);

module.exports = router;