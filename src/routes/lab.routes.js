const express = require('express');
const router = express.Router();
const labController = require('../controllers/labController');

router.get('/todos', labController.obterTodos);

router.post('/novo', labController.cadastrarNovo);

router.get('/relatorio', labController.gerarRelatorio);

module.exports = router;
