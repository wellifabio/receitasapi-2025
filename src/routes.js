const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const rotas = {
        receitasapi: '/',
        rotas: [
            {
                rota:'/receitas',
                verbo:'get',
                resposta:'Lista todas as receitas'
            },
            {
                rota:'/receitas/id',
                verbo:'get',
                resposta:'Lista apenas a receita pelo Id informado'
            },
            {
                rota:'/receitas',
                verbo:'post',
                resposta:'Cadastra nova receita',
                corpo:{
                    nome:"Nome da receita",
                    tipo:"Tipo [DOCE, SALGADA, BEBIDA]",
                    ingredientes: "Ingredientes da receita",
                    modoFazer: "Modo de fazer",
                    img:"URL da imagem da receita",
                    custoAproximado:"Tipo decimal"
                }
            },
            {
                rota:'/receitas/id',
                verbo:'put',
                resposta:'Altera a receita pelo id informado',
                corpo:{
                    nome:"Nome da receita",
                    tipo:"Tipo [DOCE, SALGADA, BEBIDA]",
                    ingredientes: "Ingredientes da receita",
                    modoFazer: "Modo de fazer",
                    img:"URL da imagem da receita",
                    custoAproximado:"Tipo decimal"
                }
            },
            {
                rota:'/receitas/id',
                verbo:'delete',
                resposta:'Exclui a receita pelo id informado',
            }
        ]
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