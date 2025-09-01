const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const rotas = {
        receitasapi: '/',
        receitas: '/receitas',
    }
    res.json(rotas);
});

const Receita = require("./controllers/receita");

router.get('/receitas', Receita.getAll);
router.get('/receitas/:id', Receita.getById);
router.post('/receitas', Receita.post);
router.put('/receitas/:id', Receita.updateById);
router.delete('/receitas/:id', Receita.deleteById);

module.exports = router;